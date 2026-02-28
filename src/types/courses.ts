
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