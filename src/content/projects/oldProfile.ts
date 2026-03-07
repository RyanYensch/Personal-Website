import type { Project } from "../../types/projects";

export const ProfileWebsite: Project = {
    slug: "profile-website",
    title: "Old Profile Website",
    summary:
        "An earlier personal profile website built around an 'opposites attract' design theme, experimenting with contrasting colours, layout styles, and visual identity.",
    tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Web",
        "Frontend",
        "UI Design"
    ],
    coverImage: "/magnet.png",
    links: {
        github: "https://github.com/RyanYensch/Profile",
        deployment: "https://ryanyensch.github.io/Profile/"
    },
    sections: [
        {
            heading: "Overview",
            body:
                "This project was an earlier attempt at creating a personal profile website. The main idea was to experiment with a visual design concept based on contrast, pairing opposing colours, layouts, and styles to create a distinctive look."
        },
        {
            heading: "Design Theme",
            body:
                "The 'opposites attract' theme focused on balancing contrasting elements such as dark and light colours, structured and free-form layouts, and different visual styles. The goal was to create something visually interesting while learning more about web design."
        },
        {
            heading: "Technical Focus",
            body:
                "The site was built using standard web technologies including HTML, CSS, and JavaScript. The project helped reinforce fundamental frontend concepts such as layout structure, responsive design, and styling."
        },
        {
            heading: "What I Learned",
            body:
                "This project was a good opportunity to experiment with design ideas and improve my understanding of how visual themes translate into real web layouts. It also helped build a foundation for later projects like my current portfolio website."
        }
    ]
};