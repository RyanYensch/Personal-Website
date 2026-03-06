import type { Project } from "../../types/projects";

export const FreeRooms: Project = {
    slug: "freerooms",
    title: "FreeRooms",
    summary:
        "A UNSW room-finder web application that helps students find vacant rooms on campus. I contributed to the project as part of the DevSoc team, working on a real shared codebase rather than building it solo.",
    tags: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "CSS",
        "Web",
        "Team Project",
        "Frontend",
        "Backend"
    ],
    coverImage: "/freerooms.webp",
    featured: true,
    links: {
        github: "https://github.com/devsoc-unsw/freerooms",
        deployment: "https://freerooms.devsoc.app"
    },
    sections: [
        {
            heading: "Overview",
            body:
                "FreeRooms is a project created to help UNSW students quickly find empty rooms on campus for studying, meetings, and events. It is a real student-facing application developed within DevSoc, and I contributed to it as part of the team."
        },
        {
            heading: "Tech Stack",
            body:
                "The project uses a modern full-stack TypeScript setup. According to the repository, the main stack includes React/Next.js for the frontend, Node/Express for the backend, and React Native for the mobile app, with TypeScript used across the codebase."
        },
        {
            heading: "Key Features",
            body:
                "The public project documentation highlights features such as browsing which rooms are free, filtering and sorting by different criteria, viewing buildings on a map, checking room timetables, and searching for specific buildings or rooms."
        },
        {
            heading: "My Contribution",
            body:
                "What I value most about this project is that it was collaborative. Instead of being a solo project, it gave me experience contributing to an existing shared codebase, working within a team structure, and helping improve a tool that students actually use."
        },
        {
            heading: "Why It Matters",
            body:
                "FreeRooms stands out to me because it solves a simple but very real student problem. It combines product thinking, frontend usability, and practical engineering in a way that feels grounded and useful rather than just being a demo project."
        }
    ]
};