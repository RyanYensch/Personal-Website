import type { Project } from "../../types/projects";

export const PersonalWebsite: Project = {
    slug: "personalwebsite",
    title: "Personal Website",
    summary:
        "My personal portfolio website for showcasing projects, experience, courses, and links in one place, built around a custom glass-and-stars design.",
    tags: [
        "React",
        "TypeScript",
        "Vite",
        "React Router",
        "Lucide",
        "CSS",
        "Frontend",
        "Web"
    ],
    coverImage: "/React-icon.png",
    featured: true,
    links: {
        github: "https://github.com/RyanYensch/Personal-Website"
    },
    sections: [
        {
            heading: "Overview",
            body:
                "This project is the website you are looking at right now. I built it as a central place to present my projects, technical interests, coursework, experience, and links in a way that feels more personal than a static resume."
        },
        {
            heading: "Tech Stack",
            body:
                "The site is built with React and TypeScript using Vite, with client-side routing handled through React Router. It also uses Lucide icons and custom CSS for the visual design and interactions."
        },
        {
            heading: "Design & UI",
            body:
                "A big focus of this project has been building a custom visual identity rather than relying on a template. The site uses a dark space-inspired background, glass-style cards, animated stars, responsive layouts, and reusable UI sections to keep the experience consistent across pages."
        },
        {
            heading: "What It Includes",
            body:
                "The site is structured into dedicated pages for projects, career experience, courses, and external links, along with a homepage that introduces me and links into the rest of the portfolio. It is designed so I can keep expanding it over time as I build more projects and gain more experience."
        },
        {
            heading: "Why I Built It",
            body:
                "I wanted a portfolio that felt like my own project rather than just a place to dump links. This gave me a chance to practice frontend development, responsive design, routing, reusable components, and presenting technical work in a way that is clearer for recruiters and other developers."
        }
    ]
};