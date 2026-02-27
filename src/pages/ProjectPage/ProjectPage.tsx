import type { JSX } from "react";
import GlassCard from "../../components/GlassCard/GlassCard";
import { projects } from "../../content/projects";
import "./ProjectPage.css"
import { searchProjects, type Project } from "../../types/projects";
import { Link, useSearchParams } from "react-router-dom";

export default function ProjectPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchTerm = searchParams.get("q") ?? "";

    const searchedProjects = searchProjects(projects, searchTerm);

    const handleChange = (value: string) => {
        if (value.trim() === "") {
            setSearchParams({});
        } else {
            setSearchParams({ q: value });
        }
    };

    return (
        <div className="projectpage">
            <h1>These are my projects!</h1>
            <GlassCard className="search-container">
                <input type="text" placeholder="Search Projects..." value={searchTerm} onChange={(e) => handleChange(e.target.value)} className="search-input" />
            </GlassCard>

            <div className="projects">
                {searchedProjects.map(p => <div key={p.slug}>{getProjectCard(p)}</div>)}
            </div>
        </div>
    );
}

function getProjectCard(project: Project): JSX.Element {
    return (
        <Link className="project-link" to={`/projects/${project.slug}`}>
            <GlassCard className="project">
                <div className="project-headers">
                    <div className="project-info">
                        <img src={project.coverImage} className="project-img" alt={`${project.title} logo`} />
                        <h2 className="project-title">{project.title}</h2>
                    </div>
                    <p className="project-summary">{project.summary}</p>
                </div>
                <div className="project-tags">
                    {project.tags.map(tag => <GlassCard key={tag} className="project-tag">{tag}</GlassCard>)}
                </div>
            </GlassCard>
        </Link >
    );
}