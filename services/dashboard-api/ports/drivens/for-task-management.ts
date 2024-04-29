import { Task as RepoTask } from "../../../../repository/app/schemas";
import { Task } from '../../app/schemas'

export interface ForTaskManagement {
    getTaskById(id: string): Promise<RepoTask>;
    getAllTasks(): Promise<RepoTask[]>;
    getTaskByStatus(status: string): Promise<RepoTask[]>
    getDays(id: string): Promise<number>;
    updateStatusByid(id: string, status: string): Promise<RepoTask>;
    createTask(task: Task): Promise<RepoTask>;
    updateTask(task: RepoTask): Promise<RepoTask>;
    deleteTaskById(id: string): Promise<void>;
}