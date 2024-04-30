import { SimpleTask, Task } from "../../domain/entity/task"
import { ICreateTaskController } from "../../domain/ports/primary/api/create-task.controller.interface"
import { ITaskRepository } from "../../domain/ports/secondary/db/task-respository-interface"

export class CreateTaskService implements ICreateTaskController {

    constructor(private readonly taskRepository: ITaskRepository) { }

    async create(task: SimpleTask): Promise<Task> {
        return await this.taskRepository.create(task)
    }

}