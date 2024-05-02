import { SimpleTask, Task, taskStatus } from "../../domain/entity/task"
import { InvalidStatusArgumentError } from "../../domain/exception/invalid-status-argument-error"
import { ICreateTaskController } from "../../domain/ports/primary/api/create-task.controller.interface"
import { ITaskRepository } from "../../domain/ports/secondary/db/task-respository-interface"

export class CreateTaskService implements ICreateTaskController {

    constructor(private readonly taskRepository: ITaskRepository) { }

    async create(task: SimpleTask): Promise<Task> {
        this.validateStatus(task)
        return await this.taskRepository.create(task)

    }

    private validateStatus(task: SimpleTask) {
        if (task.status && !taskStatus.includes(task.status)) {
            throw new InvalidStatusArgumentError()
        }
    }
}