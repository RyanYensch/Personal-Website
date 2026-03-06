import type { Project } from "../../types/projects";

export const DiscordBot: Project = {
    slug: "ereuse-discord-bot",
    title: "eReuse Discord Bot",
    summary:
        "A custom Discord bot built for the eReuse community to support day-to-day operations, automate server features, and provide a more engaging experience for volunteers.",
    tags: [
        "Python",
        "Discord Bot",
        "Automation",
        "Community",
        "Backend",
        "Bot Development"
    ],
    coverImage: "/ereuse-logo.png",
    featured: true,
    links: {
        github: "https://github.com/eReuse-Arc/discord-bot"
    },
    sections: [
        {
            heading: "Overview",
            body:
                "This project is a custom Discord bot developed for the eReuse community. It was built to help manage and support the server with features tailored to the needs of the group, rather than relying only on generic third-party bots."
        },
        {
            heading: "Tech Stack",
            body:
                "The bot is written in Python and organised into a modular structure with dedicated folders for cogs, helpers, data, and assets. The repository also includes a main entry point, constants file, and a requirements file for dependency management."
        },
        {
            heading: "Architecture",
            body:
                "A big part of the project is its modular design. The use of separate cogs and helper modules suggests a structure built for maintainability, making it easier to expand features over time and keep different responsibilities separated."
        },
        {
            heading: "What It Solves",
            body:
                "The bot acts as infrastructure for the eReuse Discord server. It supports community management and automation, and it gives the server a more customised toolset that can be adapted to how the organisation actually runs."
        },
        {
            heading: "Why I Made It",
            body:
                "I wanted something more flexible and more useful than a one-size-fits-all bot. Building it myself made it possible to shape features around the eReuse community, while also giving me more experience with Python, project structure, and long-running application development."
        }
    ]
};