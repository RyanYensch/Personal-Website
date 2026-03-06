import type { Project } from "../../types/projects";

export const RouletteSimulator: Project = {
    slug: "roulette-simulator",
    title: "Roulette Simulator",
    summary:
        "A Python desktop application that simulates the game of roulette with a graphical interface, allowing users to place bets and observe the outcomes of spins.",

    tags: [
        "Python",
        "GUI",
        "Tkinter",
        "Game Development",
        "Simulation",
        "Algorithms"
    ],

    coverImage: "/roulette.png",

    links: {
        github: "https://github.com/RyanYensch/Roulette"
    },

    sections: [
        {
            heading: "Overview",
            body:
                "This project implements a roulette simulator as a desktop application written in Python. The program provides a graphical interface where users can interact with the game, place bets, and simulate spins of a roulette wheel."
        },
        {
            heading: "Graphical User Interface",
            body:
                "The application includes a custom GUI built in Python, allowing players to interact with the roulette game visually rather than through a command-line interface. The interface manages user inputs, displays results of spins, and updates the game state dynamically."
        },
        {
            heading: "Game Logic",
            body:
                "The project models the rules of roulette by generating random outcomes for spins and calculating results based on player bets. This required implementing the logic for number generation, bet evaluation, and tracking game results."
        },
        {
            heading: "What I Learned",
            body:
                "This project helped reinforce Python programming concepts such as event-driven programming, user interface design, and implementing probability-based game mechanics. It also provided experience structuring a larger application with separate logic and GUI components."
        }
    ]
};