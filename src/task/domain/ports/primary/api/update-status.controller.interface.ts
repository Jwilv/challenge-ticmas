import { Task, TaskStatus } from "../../../entity/task";

export interface IUpdateStatusController {
    updateStatus(id: string, status: TaskStatus): Promise<Task>;
}