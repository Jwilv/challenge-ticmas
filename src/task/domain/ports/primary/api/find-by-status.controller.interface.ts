import { Task, TaskStatus } from "../../../entity/task";

export interface IFindByStatusController {
    getByStatus(status: TaskStatus): Promise<Task[]>;
}