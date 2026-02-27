export type Course = {
    code: string;
    name: string;
    unswUrl: string;
    mark?: number;          // if finished
    currentlyTaking?: boolean;
    description: string;
};

export const courses: Course[] = [
    {
        code: "SIGM6767",
        name: "Sigmas Study Fortnite",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/SIGM6767",
        currentlyTaking: true,
        description:
            "BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH",
    },
    {
        code: "ENGG6767",
        name: "Engineering Brainrots",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/ENGG6767",
        mark: 99,
        description:
            "This is some engineering things and it is a placeholder for later",
    },
    {
        code: "COMP6767",
        name: "Brainrot Security and Design",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/COMP6767",
        mark: 67,
        description:
            "What is your favourite brainrot?",
    },
    {
        code: "SIGM6969",
        name: "Sigmas Study Fortnite",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/SIGM6767",
        currentlyTaking: true,
        description:
            "BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH",
    },
    {
        code: "ENGG6969",
        name: "Engineering Brainrots",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/ENGG6767",
        mark: 99,
        description:
            "This is some engineering things and it is a placeholder for later",
    },
    {
        code: "COMP6969",
        name: "Brainrot Security and Design",
        unswUrl: "https://www.handbook.unsw.edu.au/undergraduate/courses/current/COMP6767",
        mark: 67,
        description:
            "What is your favourite brainrot?",
    }
];