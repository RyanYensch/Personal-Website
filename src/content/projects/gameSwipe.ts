import type { Project } from "../../types/projects";

export const GameSwipe: Project = {
    slug: "gameswipe",
    title: "GameSwipe",
    summary:
        "A Tinder-style web app that helps groups decide what Steam game to play by swiping through shared libraries and finding matches between players.",
    tags: [
        "In Progress",
        "TypeScript",
        "React",
        "Node.js",
        "Steam API",
        "Web App",
        "Team Project"
    ],
    coverImage: "/game.png",
    links: {
        github: "https://github.com/Coding-Kitties-Club/GameSwipe"
    },
    sections: [
        {
            heading: "Overview",
            body:
                "GameSwipe is a web application designed to solve a very common problem when gaming with friends: deciding what to play. The idea is simple — players connect their Steam libraries and swipe through games in a Tinder-like interface. When everyone in the group likes the same game, it becomes a match."
        },
        {
            heading: "How It Works",
            body:
                "The app gathers each player's Steam game library and presents the shared pool of games through a swipe-based interface. Players can like or skip games, and the system identifies matches where everyone in the group agrees."
        },
        {
            heading: "My Role",
            body:
                "This is a collaborative project being developed with a team. The goal is to build a fun but practical tool that combines real-world APIs with an interactive UI to help groups quickly decide on a game."
        },
        {
            heading: "Technical Goals",
            body:
                "Beyond the core concept, the project focuses on building a responsive frontend, integrating the Steam API, and managing shared game data across multiple users in real time."
        },
        {
            heading: "Status",
            body:
                "GameSwipe is currently a work in progress. The project is actively being developed and expanded as we refine the idea and continue building out features."
        }
    ]
};