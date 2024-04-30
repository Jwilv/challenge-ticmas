import { Task } from "../../domain/entity/task";
import { IUpdateTaskController } from "../../domain/ports/primary/api/update-task-controller.interface";

export class UpdateTaskService implements IUpdateTaskController {

    constructor(private readonly taskRepository: IUpdateTaskController) { }

    async update(task: Task): Promise<Task> {
        return await this.taskRepository.update(task)
    }
}