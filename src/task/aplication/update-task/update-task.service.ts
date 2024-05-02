import { Task, TaskStatus, taskStatus } from "../../domain/entity/task";
import { InvalidStatusArgumentError } from "../../domain/exception/invalid-status-argument-error";
import { IUpdateTaskController } from "../../domain/ports/primary/api/update-task-controller.interface";

export class UpdateTaskService implements IUpdateTaskController {

    constructor(private readonly taskRepository: IUpdateTaskController) { }

    async update(task: Task): Promise<Task> {
        if (!task.id) throw new Error('Id not provided')
        this.validateStatus(task.status)
        return await this.taskRepository.update(task)
    }

    private validateStatus(status: TaskStatus) {
        if (status && !taskStatus.includes(status)) {
            throw new InvalidStatusArgumentError()
        }
    }
}