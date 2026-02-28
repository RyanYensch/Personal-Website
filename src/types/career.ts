export type CareerCategory = "work" | "education" | "volunteering";

export type Career = {
    title: string;
    employer: string;
    start: string;
    end: string;
    summary: string;
    coverImage: string;
    tags: string[];
    points: string[];
    category: CareerCategory;
};