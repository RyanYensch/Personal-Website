import { Link, useParams } from "react-router-dom";
import type { Project } from "../../types/projects";
import { useMemo } from "react";
import { projects } from "../../content/projects";
import GlassCard from "../../components/GlassCard/GlassCard";
import "./ProjectDetailsPage.css";

export default function ProjectDetailsPage() {
    const { slug } = useParams<{ slug: string }>();

    const project: Project | undefined = useMemo(
        () => projects.find((p) => p.slug === slug),
        [slug]
    );

    if (!project) {
        return (
            <div className="projectpage project-details-page">
                <GlassCard className="details-card not-found">
                    <h1 className="details-title">Project Not Found</h1>
                    <p className="details-muted">
                        No project exists with slug: <code>{slug}</code>
                    </p>
                    <Link to="/projects" className="back-link">
                        Back to Projects
                    </Link>
                </GlassCard>
            </div>
        );
    }

    return (
        <div className="projectpage project-details-page">
            <div className="details-top">
                <Link to="/projects" className="back-link">
                    <GlassCard>
                        Back
                    </GlassCard>
                </Link>
            </div>

            <GlassCard className="project details-card">
                <div className="details-header">
                    <div className="details-info">
                        <img
                            src={project.coverImage}
                            className="project-img details-img"
                            alt={`${project.title} Cover`}
                        />
                        <h1 className="details-title">{project.title}</h1>
                    </div>

                    <p className="project-summary details-summary">{project.summary}</p>

                    <div className="project-tags">
                        {project.tags.map((tag) => (
                            <GlassCard key={tag} className="project-tag">
                                {tag}
                            </GlassCard>
                        ))}
                    </div>

                    {project.links && (
                        <div className="project-links">
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            )}
                            {project.links.deployment && (
                                <a href={project.links.deployment} target="_blank" rel="noreferrer">
                                    Deployment
                                </a>
                            )}
                            {project.links.doc && (
                                <a href={project.links.doc} target="_blank" rel="noreferrer">
                                    Docs
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </GlassCard>

            {project.sections?.length ? (
                <div className="project-sections">
                    {project.sections.map((s, i) => (
                        <GlassCard key={`${s.heading}-${i}`} className="project-section">
                            <h2 className="section-heading">{s.heading}</h2>
                            <p className="section-body">{s.body}</p>
                        </GlassCard>
                    ))}
                </div>
            ) : null}
        </div>
    );
}