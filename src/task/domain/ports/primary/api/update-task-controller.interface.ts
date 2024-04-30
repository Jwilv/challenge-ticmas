import { Task } from "../../../entity/task";

export interface IUpdateTaskController {
    update(task: Task): Promise<Task>
}