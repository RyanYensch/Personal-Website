import type { JSX } from "react";
import type { Career, CareerCategory } from "../../types/career";
import GlassCard from "../../components/GlassCard/GlassCard";
import { Careers } from "../../content/careers/careers";
import "./CareerPage.css";

const SECTION_ORDER: CareerCategory[] = ["work", "education", "volunteering"];

const SECTION_TITLES: Record<CareerCategory, string> = {
    work: "Employment",
    volunteering: "Societies & Volunteering",
    education: "Education",
};

export default function CareerPage() {
    const grouped = groupByCategory(Careers);

    return (
        <div className="careerpage">
            <h1>This is my Career</h1>

            <div className="career-sections">
                {SECTION_ORDER.map((cat) => {
                    const items = grouped[cat];
                    if (!items || items.length === 0) return null;

                    return (
                        <GlassCard key={cat} className="career-section">
                            <div className="career-section-header">
                                <h2 className="career-section-title">{SECTION_TITLES[cat]}</h2>
                            </div>

                            <div className="career-section-list">
                                {items.map((c) => (
                                    <div key={`${cat}-${c.title}`}>{getCareerCard(c)}</div>
                                ))}
                            </div>
                        </GlassCard>
                    );
                })}
            </div>
        </div>
    );
}

function groupByCategory(items: Career[]): Record<CareerCategory, Career[]> {
    const out: Record<CareerCategory, Career[]> = {
        work: [],
        volunteering: [],
        education: [],
    };

    for (const item of items) {
        out[item.category].push(item);
    }

    return out;
}

function getCareerCard(career: Career): JSX.Element {
    return (
        <GlassCard className="career">
            <div className="career-headers">
                <div className="career-headers-top">
                    <div className="career-headers-titleinfo">
                        <img
                            src={career.coverImage}
                            className="career-img"
                            alt={`${career.title} logo`}
                        />
                        <h2 className="project-title">{career.title}</h2>
                    </div>

                    <div className="career-headers-info">
                        <GlassCard className="career-employer">{career.employer}</GlassCard>
                        <GlassCard className="career-dates">
                            {career.start} - {career.end}
                        </GlassCard>
                    </div>
                </div>

                <div className="career-tags">
                    {career.tags.map((tag) => (
                        <GlassCard key={tag} className="career-tag">
                            {tag}
                        </GlassCard>
                    ))}
                </div>

                <p className="career-summary">{career.summary}</p>

                <div className="career-points">
                    {career.points.map((point) => (
                        <GlassCard key={point} className="career-point">
                            {point}
                        </GlassCard>
                    ))}
                </div>
            </div>
        </GlassCard>
    );
}