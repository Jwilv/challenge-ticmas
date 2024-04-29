import { TaskStatus } from "../../../../repository/app/schemas";

export interface Task {
    title: string;
    description: string;
    status: string;
}

export const taskStatus: string[] = ['pending', 'in-progress', 'finished', 'deleted']