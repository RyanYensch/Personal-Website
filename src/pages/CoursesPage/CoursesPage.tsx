import { useMemo, useRef, useState } from "react";
import GlassCard from "../../components/GlassCard/GlassCard";
import "./CoursesPage.css";
import { courses, type Course } from "../../content/courses/courses";

// Original Design Credit: https://codesandbox.io/p/sandbox/react-carousel-3d-9x3wt

function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}


function circularOffset(i: number, active: number, n: number) {
    let d = mod(i - active, n);
    if (d > n / 2) d -= n;
    return d;
}

function getSlideStyle(offset: number): React.CSSProperties {
    if (offset === 0) {
        return {
            opacity: 1,
            transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
            zIndex: 10,
            pointerEvents: "auto",
        };
    }
    if (offset === -1) {
        return {
            opacity: 1,
            transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
            zIndex: 9,
            pointerEvents: "auto",
        };
    }
    if (offset === 1) {
        return {
            opacity: 1,
            transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
            zIndex: 9,
            pointerEvents: "auto",
        };
    }
    if (offset === -2) {
        return {
            opacity: 1,
            transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
            zIndex: 8,
            pointerEvents: "none",
        };
    }
    if (offset === 2) {
        return {
            opacity: 1,
            transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
            zIndex: 8,
            pointerEvents: "none",
        };
    }

    const x = offset < 0 ? -480 : 480;
    const rot = offset < 0 ? 35 : -35;
    return {
        opacity: 0,
        transform: `translateX(${x}px) translateZ(-500px) rotateY(${rot}deg)`,
        zIndex: 7,
        pointerEvents: "none",
    };
}

export default function CoursesPage() {
    const data = courses;
    const n = data.length;

    const [active, setActive] = useState(0);

    const next = () => setActive((a) => (a + 1) % n);
    const prev = () => setActive((a) => (a - 1 + n) % n);

    const activeCourse = useMemo(() => data[active], [data, active]);

    const startXRef = useRef<number | null>(null);
    const startYRef = useRef<number | null>(null);
    const pointerIdRef = useRef<number | null>(null);

    const isDraggingRef = useRef(false);
    const didSwipeRef = useRef(false);

    const DRAG_START_PX = 10;
    const SWIPE_MIN_PX = 50;
    const SWIPE_MAX_OFF_AXIS = 60;

    const onPointerDown = (e: React.PointerEvent) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;

        startXRef.current = e.clientX;
        startYRef.current = e.clientY;
        pointerIdRef.current = e.pointerId;

        isDraggingRef.current = false;
        didSwipeRef.current = false;
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (startXRef.current == null || startYRef.current == null) return;

        const dx = e.clientX - startXRef.current;
        const dy = e.clientY - startYRef.current;

        if (!isDraggingRef.current && Math.abs(dy) > Math.abs(dx)) return;

        if (!isDraggingRef.current && Math.abs(dx) > DRAG_START_PX) {
            isDraggingRef.current = true;

            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        }
    };

    const onPointerUp = (e: React.PointerEvent) => {
        if (startXRef.current == null || startYRef.current == null) return;

        const dx = e.clientX - startXRef.current;
        const dy = e.clientY - startYRef.current;

        startXRef.current = null;
        startYRef.current = null;
        pointerIdRef.current = null;

        if (!isDraggingRef.current) return;

        isDraggingRef.current = false;

        if (Math.abs(dy) > SWIPE_MAX_OFF_AXIS) return;

        if (dx > SWIPE_MIN_PX) {
            didSwipeRef.current = true;
            prev();
        } else if (dx < -SWIPE_MIN_PX) {
            didSwipeRef.current = true;
            next();
        }
    };

    const onClickCapture = (e: React.MouseEvent) => {
        if (didSwipeRef.current) {
            e.preventDefault();
            e.stopPropagation();
            didSwipeRef.current = false;
        }
    };

    return (
        <div className="projectpage coursepage">
            <h1>Courses</h1>

            <div className="course-carousel-wrap">
                <div className="slideC" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onClickCapture={onClickCapture}>
                    {data.map((course, i) => {
                        const offset = circularOffset(i, active, n);
                        const style = getSlideStyle(offset);

                        return (
                            <div key={course.code} className="slide" style={style}>
                                <GlassCard className="course-card">
                                    <CourseCard course={course} />
                                </GlassCard>
                            </div>
                        );
                    })}
                </div>

                <div className="btns">
                    <button className="navbtn" onClick={prev} aria-label="Previous course">
                        {"<"}
                    </button>
                    <button className="navbtn" onClick={next} aria-label="Next course">
                        {">"}
                    </button>
                </div>

                <p className="course-hint">
                    Viewing: <span className="course-hint-strong">{activeCourse.code}</span>
                </p>
            </div>
        </div>
    );
}

function CourseCard({ course }: { course: Course }) {
    const status =
        course.currentlyTaking ? "Current" : course.mark != null ? `Mark: ${course.mark}` : "Completed";

    return (
        <div className="course-content">
            <div className="course-top">
                <div className="course-code">{course.code}</div>

                <div className="course-badges">
                    <GlassCard className="project-tag course-badge">
                        Term {course.term} {course.year}
                    </GlassCard>

                    <GlassCard className="project-tag course-badge">
                        {status}
                    </GlassCard>
                </div>
            </div>

            <h2 className="course-name">{course.name}</h2>

            <p className="course-desc">{course.description}</p>

            <div className="course-links">
                <a href={course.unswUrl} target="_blank" rel="noreferrer" className="course-link">
                    UNSW course page
                </a>
            </div>
        </div>
    );
}