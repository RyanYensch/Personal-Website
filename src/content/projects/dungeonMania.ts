import type { Project } from "../../types/projects";

export const DungeonMania: Project = {
    slug: "dungeonmania",
    title: "Dungeon Mania",
    summary:
        "A Java backend game engine for a dungeon puzzle game developed for UNSW COMP2511, focusing on object-oriented design, design patterns, pathfinding algorithms, and test-driven development.",

    tags: [
        "Java",
        "OOP",
        "Design Patterns",
        "Algorithms",
        "Game Engine",
        "Testing",
        "Backend",
        "Software Architecture"
    ],

    coverImage: "/player-right.png",

    sections: [
        {
            heading: "Overview",
            body:
                "Dungeon Mania was a major software engineering project completed for COMP2511 at UNSW. The project involved building the backend game engine for a dungeon puzzle game where players navigate maps, collect items, fight enemies, and complete goals such as reaching exits or solving switch puzzles."
        },
        {
            heading: "Object-Oriented Design",
            body:
                "A key focus of the project was designing a clean object-oriented architecture. The system models many different entity types including players, enemies, items, and map components, each with distinct behaviours and interactions. The design emphasised encapsulation, separation of responsibilities, and maintainable class relationships."
        },
        {
            heading: "Design Patterns",
            body:
                "The architecture required the use of multiple design patterns to maintain flexibility and extensibility as requirements evolved. Patterns such as Strategy, Factory, Composite, and State were used to organise game behaviours, entity creation, and goal logic while keeping the system modular and adaptable."
        },
        {
            heading: "Game Mechanics",
            body:
                "The engine supports a wide range of gameplay mechanics including entity movement, combat systems, item crafting, potion effects, portals, and environmental interactions such as switches and bombs. Game state is updated in discrete ticks where the player's actions occur first followed by enemy movement and interactions."
        },
        {
            heading: "Algorithms and AI",
            body:
                "Enemy movement behaviour required implementing pathfinding using Dijkstra's algorithm to determine the shortest route toward the player. Additional mechanics such as swamp tiles required extending the algorithm to account for variable movement costs."
        },
        {
            heading: "Persistence and Extensions",
            body:
                "Later stages of the project introduced persistence, allowing the full game state to be saved and restored. Additional extensions included time travel mechanics, procedural dungeon generation using a randomized Prim's algorithm, and logic circuits built from switches and wires."
        },
        {
            heading: "Testing and Engineering Practices",
            body:
                "The project emphasised test-driven development and software engineering workflow. Unit, integration, and system tests were written to verify behaviour across the game engine. The project was developed collaboratively using Git, merge requests, code reviews, and continuous testing to maintain stability."
        }
    ]
};