import type { Project } from "../../types/projects";

export const CodingEscapeRoom: Project = {
    slug: "coding-escape-room",
    title: "Coding Escape Room",
    summary:
        "An interactive escape-room style programming game built with Python and Tkinter where players solve coding challenges to unlock files, computers, and doors to escape the room.",

    tags: [
        "Python",
        "Tkinter",
        "C++",
        "Game Development",
        "Algorithms",
        "LeetCode",
        "GUI"
    ],

    coverImage: "/lock.png",

    links: {
        github: "https://github.com/RyanYensch/CodingEscapeRoom"
    },

    sections: [
        {
            heading: "Overview",
            body:
                "Coding Escape Room is a puzzle game built around the idea of solving programming challenges to escape a virtual room. The application simulates a small computer environment where the player explores files, interacts with programs, and unlocks information by completing coding problems."
        },
        {
            heading: "Interactive Computer Environment",
            body:
                "The interface is built using Python and Tkinter and mimics a simple desktop computer. Players can open files, explore directories, read notes, and access different parts of the system such as locked screens and computer terminals to uncover clues needed to progress."
        },
        {
            heading: "Programming Challenges",
            body:
                "Progress through the escape room is achieved by solving coding problems inspired by LeetCode challenges. Solutions are written in C++ and evaluated within the program to determine whether the puzzle has been solved correctly."
        },
        {
            heading: "Game Mechanics",
            body:
                "The program tracks player progress, manages locked puzzles, and unlocks new information as challenges are completed. The game also records completion time and other statistics during the playthrough."
        },
        {
            heading: "Results Dashboard",
            body:
                "Once the player escapes the room, the program generates an HTML results page showing statistics from the run. A small JavaScript and CSS frontend is used to display the collected data in a readable format."
        },
        {
            heading: "What I Learned",
            body:
                "This project gave me experience building a larger interactive application with multiple UI screens and game state management. It also involved integrating Python interfaces with C++ challenge solutions and designing puzzle progression logic."
        }
    ]
};