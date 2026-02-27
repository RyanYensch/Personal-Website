export type Project = {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    coverImage: string;
    featured?: boolean;
    links?: {
        github?: string;
        deployment?: string;
        doc?: string;
    };
    sections?: Array<{ heading: string, body: string }>;
};

export type Weights = {
    title: number;
    tags: number;
    summary: number;
    sectionHeading: number;
    sectionBody: number;
}

const DEFAULT_WEIGHTS: Weights = {
    title: 100,
    tags: 50,
    summary: 20,
    sectionHeading: 12,
    sectionBody: 5
}

function tokeniseQuery(query: string): string[] {
    return query.toLowerCase().trim().split(/\s+/).filter(Boolean);
}

function countOccurrences(text: string, token: string): number {
    if (!token) return 0;

    let count: number = 0;
    let i: number = 0;

    while (true) {
        const idx = text.indexOf(token, i);
        if (idx == -1) break;
        count++;
        i = idx + 1;
    }

    return count;
}

function scoreProject(project: Project, tokens: string[], weights: Weights): number {
    const title = project.title.toLowerCase();
    const summary = project.summary.toLowerCase();
    const tags = project.tags.join(" ").toLowerCase();

    let sectionHeadingText = "";
    let sectionBodyText = "";
    if (project.sections?.length) {
        sectionHeadingText = (project.sections.map(s => s.heading)).join(" ").toLowerCase();
        sectionBodyText = (project.sections.map(s => s.body)).join(" ").toLowerCase();
    }

    let score = 0;

    for (const token of tokens) {
        score += countOccurrences(title, token) * weights.title;
        score += countOccurrences(tags, token) * weights.tags;
        score += countOccurrences(summary, token) * weights.summary;

        if (sectionHeadingText) score += countOccurrences(sectionHeadingText, token) * weights.sectionHeading;
        if (sectionBodyText) score += countOccurrences(sectionBodyText, token) * weights.sectionBody;
    }

    return score;
}


export function searchProjects(projects: Project[], query: string, weights: Weights = DEFAULT_WEIGHTS): Project[] {
    const tokens = tokeniseQuery(query);
    if (tokens.length === 0) return projects;

    return projects.map((p, idx) => ({
        p, idx, score: scoreProject(p, tokens, weights),
    })).filter(x => x.score > 0)
        .sort((a, b) => (b.score - a.score) || (a.idx - b.idx))
        .map(x => x.p);
}