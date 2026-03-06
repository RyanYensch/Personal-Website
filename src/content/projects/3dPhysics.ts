import type { Project } from "../../types/projects";

export const Physics3D: Project = {
    slug: "3dphysics",
    title: "3D Physics",
    summary:
        "An experimental 3D physics simulation project exploring how objects move and interact in a simulated environment.",
    tags: [
        "In Progress",
        "C++",
        "Physics Simulation",
        "Graphics",
        "OpenGL",
        "Systems"
    ],
    coverImage: "/opengl.webp",
    links: {
        github: "https://github.com/RyanYensch/3DPhysics"
    },
    sections: [
        {
            heading: "Overview",
            body:
                "This project is an ongoing experiment in building a small 3D physics simulation. The goal is to explore how physical systems can be represented and updated in real time, including motion, forces, and interactions between objects."
        },
        {
            heading: "Motivation",
            body:
                "Physics engines are at the core of many simulations, games, and robotics systems. I started this project to better understand the underlying mechanics behind these systems rather than just using existing libraries."
        },
        {
            heading: "What I'm Exploring",
            body:
                "The project focuses on implementing the core ideas behind physics simulation such as object motion, forces, and simple interaction between bodies. It is also an opportunity to experiment with 3D rendering and visualising simulation results."
        },
        {
            heading: "Current Status",
            body:
                "3DPhysics is currently a work in progress. The project is evolving as I experiment with different simulation approaches and learn more about physics modelling and graphics programming."
        }
    ]
};