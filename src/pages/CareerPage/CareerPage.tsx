import type { JSX } from "react";
import type { Career } from "../../types/career";
import GlassCard from "../../components/GlassCard/GlassCard";
import { Careers } from "../../content/careers/careers";
import "./CareerPage.css"

export default function CareerPage() {
    return (
        <div className="careerpage">
            <h1>This is my Career</h1>

            <div className="projects">
                {Careers.map(c => <div key={c.title}>{getCareerCard(c)}</div>)}
            </div>
        </div>
    );
}


function getCareerCard(career: Career): JSX.Element {
    return (
        <GlassCard className="career">
            <div className="career-headers">
                <div className="career-headers-top">
                    <div className="career-headers-titleinfo">
                        <img src={career.coverImage} className="career-img" alt={`${career.title} logo`} />
                        <h2 className="project-title">{career.title}</h2>
                    </div>
                    <div className="career-headers-info">
                        <GlassCard className="career-employer">
                            {career.employer}
                        </GlassCard>
                        <GlassCard className="career-dates">
                            {career.start} - {career.end}
                        </GlassCard>
                    </div>
                </div>
                <div className="career-tags">
                    {career.tags.map(tag => <GlassCard key={tag} className="career-tag">{tag}</GlassCard>)}
                </div>
                <p className="career-summary">{career.summary}</p>

                <div className="career-points">
                    {career.points.map(point => <GlassCard key={point} className="career-point">{point}</GlassCard>)}
                </div>
            </div>
        </GlassCard>
    );
}