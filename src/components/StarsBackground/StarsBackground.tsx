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

const MIN_EFFECT_RADIUS = 40;
const SIZE_EFFECT_FACTOR = 30;
const ORBIT_INTESITY = 0.08;
const INWARD_PULL_STRENGTH = 0.4;

export default function StarsBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const startsRef = useRef<Star[]>([]);
    const rafRef = useRef<number | null>(null);
    const mouseRef = useRef<{ x: number, y: number } | null>(null);

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

        const handleMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        }

        const tick = () => {
            const { innerWidth: width, innerHeight: height } = window;

            if (!ctx) return;

            ctx.clearRect(0, 0, width, height);

            for (const s of startsRef.current) {
                const mouse = mouseRef.current;

                if (mouse) {
                    const dx = mouse.x - s.x;
                    const dy = mouse.y - s.y;
                    const dist = Math.hypot(dx, dy);

                    const effectRadius = MIN_EFFECT_RADIUS + s.r * SIZE_EFFECT_FACTOR;

                    if (dist < effectRadius) {
                        const nx = dx / dist;
                        const ny = dy / dist;

                        const px = -ny;
                        const py = nx;

                        const strength = (1 - dist / effectRadius) * ORBIT_INTESITY;

                        s.vx += px * strength;
                        s.vy += py * strength;

                        s.vx += nx * strength * INWARD_PULL_STRENGTH;
                        s.vy += ny * strength * INWARD_PULL_STRENGTH;
                    }
                }

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
        window.addEventListener("mousemove", handleMove);
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMove);
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