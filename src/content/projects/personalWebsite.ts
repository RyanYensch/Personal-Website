import type { Project } from "../../types/projects";

export const PersonalWebsite: Project = {
    slug: "personalwebsite",
    title: "Personal Website",
    summary: "This is the website you are looking at right now!",
    tags: ["React", "Vite", "TypeScript", "GitHub", "Frontend", "Web"],
    coverImage: "/React-icon.png",
    featured: true,
    links: {
        github: "https://github.com/RyanYensch/Personal-Website",
        demo: "http://localhost:5173/"
    },
    sections: [
        { heading: "What is this?", body: "..." },
        { heading: "Tech Stack", body: "..." }
    ]
};