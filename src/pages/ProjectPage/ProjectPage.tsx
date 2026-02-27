import { useState, type ChangeEvent, type JSX } from "react";
import GlassCard from "../../components/GlassCard/GlassCard";
import { projects } from "../../content/projects";
import "./ProjectPage.css"
import type { Project } from "../../types/projects";
import { Link } from "react-router-dom";

export default function ProjectPage() {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        search(searchTerm);
    }

    return (
        <div className="projectpage">
            <h1>These are my projects!</h1>
            <GlassCard className="search-container">
                <input type="text" placeholder="Search Projects..." value={searchTerm} onChange={handleInputChange} className="search-input" />
            </GlassCard>

            {projects.map(p => getProjectCard(p))}
        </div>
    );
}

function search(searchTerm: string) {
    console.log(searchTerm);
    return;
}

function getProjectCard(project: Project): JSX.Element {
    return (
        <Link className="project-link" to={`/projects/${project.slug}`}>
            <GlassCard className="project">
                <img src="/React-icon.png" className="project-img" />
                <h2 className="project-title">{project.title}</h2>
                <p className="project-summary">{project.summary}</p>
                {project.tags.map(tag => <GlassCard className="project-tag">{tag}</GlassCard>)}
            </GlassCard>
        </Link >
    );
}