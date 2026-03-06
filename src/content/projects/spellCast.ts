import type { Project } from "../../types/projects";

export const SpellCastSolver: Project = {
    slug: "spellcastsolver",
    title: "SpellCast Solver",
    summary:
        "A Python tool that analyzes a SpellCast board and calculates the highest-scoring words, helping players find the optimal move.",
    tags: [
        "Python",
        "Algorithms",
        "Search",
        "Game Solver",
        "Automation"
    ],
    coverImage: "/spellcast.png",
    links: {
        github: "https://github.com/RyanYensch/SpellCastSolver"
    },
    sections: [
        {
            heading: "Overview",
            body:
                "SpellCast Solver is a small project I built to experiment with algorithmic problem solving. The program analyzes a SpellCast game board and determines the best possible word choices based on scoring rules and tile modifiers."
        },
        {
            heading: "How It Works",
            body:
                "The solver searches the board to generate valid word paths and calculates their score based on letter values and board multipliers. By evaluating many possible paths, it identifies the highest scoring options available from the current board state."
        },
        {
            heading: "Technical Focus",
            body:
                "This project focuses on implementing search algorithms and efficient word lookup. Solving this type of puzzle requires exploring a large number of possible paths while pruning invalid or low-value branches to keep the computation practical."
        },
        {
            heading: "Why I Built It",
            body:
                "The main goal of this project was to explore algorithmic thinking and build something small but interesting around a real game. It was a fun way to practice Python and experiment with search strategies and optimisation."
        }
    ]
};