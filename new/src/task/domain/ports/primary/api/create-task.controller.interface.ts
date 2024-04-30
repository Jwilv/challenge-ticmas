import { SimpleTask, Task } from "../../../entity/task";

export interface ICreateTaskController {
    create(task: SimpleTask): Promise<Task>
}