import { Link, useParams } from "react-router-dom";
import type { Project } from "../../types/projects";
import { useMemo } from "react";
import { projects } from "../../content/projects";
import GlassCard from "../../components/GlassCard/GlassCard";

export default function ProjectDetailsPage() {
    const { slug } = useParams<{ slug: string }>();

    const project: Project | undefined = useMemo(
        () => projects.find((p) => p.slug === slug), [slug]
    )

    if (!project) {
        return (
            <div className="project-details">
                <h1>Project Not Found</h1>
                <p>No project exists with slug: <code>{slug}</code></p>
                <Link to="/projects">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="project-details">
            <Link to="/projects" className="back-link">Back</Link>

            <GlassCard className="project">
                <div className="project-header">
                    <img src={project.coverImage} className="project-img" alt={`${project.title} Cover`} />

                    <div className="project-text">
                        <h1>{project.title}</h1>
                        <p className="project-summary">{project.summary}</p>

                        <div className="project-tags">
                            {project.tags.map((tag) => (
                                <GlassCard key={tag} className="project-tag">{tag}</GlassCard>
                            ))}
                        </div>

                        {project.links && (
                            <div className="project-links">
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noreferrer">
                                        Demo
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
                </div>
            </GlassCard>

            {project.sections?.length ? (
                <div className="project-sections">
                    {project.sections.map((s, i) => (
                        <GlassCard key={`${s.heading}-${i}`} className="project-section">
                            <h2>{s.heading}</h2>
                            <p>{s.body}</p>
                        </GlassCard>
                    ))}
                </div>
            ) : null}
        </div>
    );
}