
export type Course = {
    code: string;
    name: string;
    unswUrl: string;
    year: number;
    term: number;

    mark?: number;
    grade?: string;
    currentlyTaking?: boolean;

    description: string;
};

export const courses: Course[] = [
    {
        year: 2024,
        term: 1,
        code: "COMP1511",
        name: "Programming Fundamentals",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/COMP1511",
        mark: 89,
        grade: "HD",
        description:
            "Foundational programming in C covering memory management, pointers, modular design, debugging, and algorithmic thinking. Built strong low-level reasoning and problem-solving skills essential for systems and backend development.",
    },
    {
        year: 2024,
        term: 1,
        code: "MATH1131",
        name: "Mathematics 1A",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/MATH1131",
        mark: 81,
        grade: "DN",
        description:
            "Calculus, linear algebra, and mathematical modelling. Developed analytical problem-solving ability and formal reasoning skills used in optimisation, machine learning, and engineering analysis.",
    },
    {
        year: 2024,
        term: 1,
        code: "PHYS1121",
        name: "Physics 1A",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/PHYS1121",
        grade: "SY",
        description:
            "Mechanics, electromagnetism, and experimental physics. Strengthened quantitative modelling skills and applied mathematics to real-world engineering systems.",
    },

    {
        year: 2024,
        term: 2,
        code: "MATH1231",
        name: "Mathematics 1B",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/MATH1231",
        mark: 85,
        grade: "HD",
        description:
            "Multivariable calculus, differential equations, and advanced linear algebra. Built mathematical foundations for control systems, numerical computing, and optimisation problems.",
    },
    {
        year: 2024,
        term: 2,
        code: "ENGG1300",
        name: "Engineering Mechanics",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/ENGG1300",
        mark: 80,
        grade: "DN",
        description:
            "Statics and dynamics of engineering systems. Developed structured modelling approaches and rigorous problem decomposition applicable to mechanical and robotics systems.",
    },
    {
        year: 2024,
        term: 2,
        code: "COMP1531",
        name: "Software Engineering Fundamentals",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/COMP1531",
        mark: 100,
        grade: "HD",
        description:
            "Team-based software development using Git, CI/CD, REST APIs, and agile workflows. Focused on scalable backend design, automated testing, and collaborative engineering practices.",
    },

    {
        year: 2024,
        term: 3,
        code: "DESN1000",
        name: "Engineering Design",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/DESN1000",
        mark: 83,
        grade: "DN",
        description:
            "Project-based engineering design with stakeholder requirements, prototyping, and iterative development. Strengthened teamwork, documentation, and systems-level thinking.",
    },
    {
        year: 2024,
        term: 3,
        code: "ELEC1111",
        name: "Electrical Circuit Fundamentals",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/ELEC1111",
        mark: 91,
        grade: "HD",
        description:
            "Circuit analysis, signal behaviour, and electronic systems modelling. Built strong fundamentals in hardware-level reasoning and applied mathematics.",
    },
    {
        year: 2024,
        term: 3,
        code: "COMP1521",
        name: "Computer Systems Fundamentals",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/COMP1521",
        mark: 94,
        grade: "HD",
        description:
            "Low-level systems programming, assembly, memory management, and concurrency. Developed deep understanding of how software interacts with hardware and operating systems.",
    },

    {
        year: 2025,
        term: 1,
        code: "MATH2018",
        name: "Engineering Mathematics 2D",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/MATH2018",
        mark: 89,
        grade: "HD",
        description:
            "Advanced differential equations, transforms, and applied mathematical modelling. Strengthened analytical techniques used in control, signal processing, and robotics.",
    },
    {
        year: 2025,
        term: 1,
        code: "ELEC2141",
        name: "Digital Circuit Design",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/ELEC2141",
        mark: 94,
        grade: "HD",
        description:
            "RTL design, finite state machines, FPGA implementation, and timing analysis. Gained practical experience designing and verifying digital hardware systems.",
    },
    {
        year: 2025,
        term: 1,
        code: "COMP2521",
        name: "Data Structures and Algorithms",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/COMP2521",
        mark: 97,
        grade: "HD",
        description:
            "Complexity analysis, advanced data structures, graph algorithms, and optimisation. Strengthened problem-solving under performance constraints and algorithmic reasoning.",
    },

    {
        year: 2025,
        term: 2,
        code: "COMP2511",
        name: "Object-Oriented Design & Programming",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/COMP2511",
        mark: 90,
        grade: "HD",
        description:
            "Object-oriented architecture, design patterns, testing, and maintainable software design. Focused on scalable, modular systems and clean code practices.",
    },
    {
        year: 2025,
        term: 2,
        code: "COMP6841",
        name: "Extended Security Engineering and Cyber Security",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/COMP6841",
        mark: 83,
        grade: "DN",
        description:
            "Applied cryptography, authentication protocols, threat modelling, and security engineering. Built practical understanding of secure system design and vulnerability mitigation.",
    },
    {
        year: 2025,
        term: 2,
        code: "MMAN2300",
        name: "Engineering Mechanics 2",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/MMAN2300",
        mark: 88,
        grade: "HD",
        description:
            "Dynamics and advanced mechanical system modelling. Applied mathematical tools to real-world mechanical engineering problems.",
    },

    {
        year: 2025,
        term: 3,
        code: "MATH2089",
        name: "Numerical Methods and Statistics",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/MATH2089",
        mark: 89,
        grade: "HD",
        description:
            "Numerical optimisation, statistical modelling, and computational methods. Developed tools for data-driven decision making and simulation-based engineering.",
    },
    {
        year: 2025,
        term: 3,
        code: "MTRN2500",
        name: "Computing for Mechatronic Engineers",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/MTRN2500",
        mark: 96,
        grade: "HD",
        description:
            "Embedded systems programming, real-time control, and hardware-software integration. Built experience interfacing sensors, actuators, and microcontrollers.",
    },
    {
        year: 2025,
        term: 3,
        code: "MMAN1130",
        name: "Design and Manufacturing",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/MMAN1130",
        mark: 87,
        grade: "HD",
        description:
            "Engineering design processes, manufacturing methods, and CAD-based prototyping. Emphasised practical product development and technical documentation.",
    },

    {
        year: 2026,
        term: 1,
        currentlyTaking: true,
        code: "COMP6443",
        name: "Web Application Security and Testing",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/COMP6443",
        description:
            "Advanced web security, penetration testing, and exploit development. Practical experience identifying and mitigating real-world vulnerabilities in web systems.",
    },
    {
        year: 2026,
        term: 1,
        currentlyTaking: true,
        code: "ENGG2400",
        name: "Mechanics of Solids 1",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/ENGG2400",
        description:
            "Stress analysis, material behaviour, and structural modelling. Applied engineering mathematics to analyse and design load-bearing systems.",
    },
    {
        year: 2026,
        term: 1,
        currentlyTaking: true,
        code: "MTRN3210",
        name: "Feedback Control Systems",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/MTRN3210",
        description:
            "Control theory, stability analysis, and controller design. Implemented feedback systems using mathematical modelling and simulation tools.",
    },
];