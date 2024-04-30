export type TaskStatus = 'pending' | 'in-progress' | 'finished' | 'deleted'

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: Date;
}

export interface SimpleTask {
    title: string;
    description: string;
    status?: TaskStatus;
}