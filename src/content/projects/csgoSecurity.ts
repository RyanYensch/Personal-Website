import type { Project } from "../../types/projects";

export const CSGOSecurityProject: Project = {
    slug: "csgo-security-project",
    title: "CS:GO Security Research Project",
    summary:
        "A coursework project exploring how game modifications work at a low level by building an injected DLL and experimenting with memory hooks and rendering overlays.",
    tags: [
        "C++",
        "Security",
        "Reverse Engineering",
        "Systems Programming",
        "Memory Hooking",
        "Research"
    ],
    coverImage: "/csgo.png",
    sections: [
        {
            heading: "Overview",
            body:
                "This project was completed as part of the COMP6841 security course. The goal was to explore how game modification tools operate internally by building a DLL that can be injected into the game process and interact with the game at runtime."
        },
        {
            heading: "Technical Focus",
            body:
                "The project involved working with C++ and low-level concepts such as process memory, hooking functions, and interfacing with game internals. Several libraries were used to help implement hooks and rendering overlays, including MinHook and ImGui."
        },
        {
            heading: "How It Works",
            body:
                "The project uses a DLL injection approach that allows custom code to run inside the game's process. From there, hooks can intercept certain functions and modify behaviour or display custom information through an overlay."
        },
        {
            heading: "Research Context",
            body:
                "This work was completed strictly for academic purposes as part of a security course. The focus was on understanding how these techniques work internally rather than deploying them in online environments."
        },
        {
            heading: "What I Learned",
            body:
                "Working on this project helped me better understand reverse engineering concepts, memory manipulation, function hooking, and how complex software systems can be analysed from the outside."
        }
    ]
};