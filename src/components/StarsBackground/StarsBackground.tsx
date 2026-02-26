import { useEffect, useRef } from "react";
import "./StarsBackground.css"

type Star = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    a: number;
}

export default function StarsBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const startsRef = useRef<Star[]>([]);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));

        const resize = () => {
            const { innerWidth: width, innerHeight: height } = window;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.floor((width * height) / 12000);
            startsRef.current = makeStars(count, width, height);
        };

        const tick = () => {
            const { innerWidth: width, innerHeight: height } = window;

            if (!ctx) return;

            ctx.clearRect(0, 0, width, height);

            for (const s of startsRef.current) {
                s.x += s.vx;
                s.y += s.vy;

                if (s.x < -10) s.x = width + 10;
                if (s.x > width + 10) s.x = -10;
                if (s.y < -10) s.y = height + 10;
                if (s.y > width + 10) s.y = -10;

                ctx.globalAlpha = s.a;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(225, 225, 221, 1)";
                ctx.fill();
            }

            ctx.globalAlpha = 1;
            rafRef.current = requestAnimationFrame(tick);
        };

        resize();
        window.addEventListener("resize", resize);
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("resize", resize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);


    return (
        <div className="stars-layer" aria-hidden="true">
            <canvas className="stars-canvas" ref={canvasRef}></canvas>
        </div>
    );
}


function makeStars(count: number, width: number, height: number): Star[] {
    const stars: Star[] = [];

    for (let i = 0; i < count; i++) {
        stars.push({
            x: rand(0, width),
            y: rand(0, height),
            vx: rand(-0.06, 0.06),
            vy: rand(-0.04, 0.04),
            r: rand(0.6, 1.6),
            a: rand(0.25, 0.9),
        });
    }
    return stars;
}

function rand(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}