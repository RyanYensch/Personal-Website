export type Project = {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    featured?: boolean;
    links?: {
        github?: string;
        demo?: string;
        doc?: string;
    };
    sections?: Array<{ heading: string, body: string }>;
};