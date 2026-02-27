import { useMemo, useState } from "react";
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

    return (
        <div className="projectpage coursepage">
            <h1>Courses</h1>

            <div className="course-carousel-wrap">
                <div className="slideC">
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
        course.currentlyTaking ? "Currently taking" : course.mark != null ? `Mark: ${course.mark}` : "Completed";

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