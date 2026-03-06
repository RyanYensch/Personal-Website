import type { Project } from "../../types/projects";

export const Toohak: Project = {
    slug: "toohak",
    title: "Toohak",
    summary:
        "Backend infrastructure for a multiplayer quiz platform built as part of UNSW COMP1531. The system implements authentication, quiz management, real-time gameplay state, and a REST API server designed to power a Kahoot-style application.",

    tags: [
        "TypeScript",
        "Node.js",
        "Express",
        "REST API",
        "Backend",
        "Testing",
        "Software Engineering"
    ],

    coverImage: "/kahoot.png",

    sections: [
        {
            heading: "Overview",
            body:
                "Toohak was a group backend project completed for COMP1531: Software Engineering Fundamentals at UNSW. The goal of the project was to design and implement the server-side infrastructure for a multiplayer quiz platform similar to Kahoot, supporting quiz creation, player participation, and competitive gameplay sessions."
        },
        {
            heading: "Iterative Development",
            body:
                "The project followed an iterative software development process across multiple milestones. Early iterations focused on core application logic and unit testing, while later stages introduced a full HTTP server, persistent data storage, and additional gameplay functionality. This structure mirrored real-world development practices and required continuous refactoring as the system evolved."
        },
        {
            heading: "Backend Architecture",
            body:
                "The backend exposes a REST API built using Node.js and Express. Endpoints handle authentication, quiz creation and management, session control, and gameplay operations. The architecture separates HTTP routing from application logic to keep the system modular and easier to maintain."
        },
        {
            heading: "Authentication and Sessions",
            body:
                "User authentication and session management were implemented to allow administrators to securely manage quizzes. Later iterations introduced hashed password storage and session identifiers to prevent enumeration and improve security practices."
        },
        {
            heading: "Testing and Code Quality",
            body:
                "A large focus of the project was automated testing and engineering practices. Features were implemented using test-first development with black-box tests verifying system behaviour. Continuous integration pipelines, linting, and structured merge requests were used to maintain code quality across the team."
        },
        {
            heading: "Results",
            body:
                "The project required designing a complete backend system while working collaboratively within a structured software engineering workflow. Through this project I gained practical experience with API design, automated testing, version control workflows, and building maintainable backend services. I achieved a final course mark of 100 in COMP1531."
        }
    ]
};