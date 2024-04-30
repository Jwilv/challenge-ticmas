import { Task } from "../../domain/entity/task";
import { IFindAllTaskController } from "../../domain/ports/primary/api/find-all-task.controller.interface";
import { ITaskRepository } from "../../domain/ports/secondary/db/task-respository-interface";

export class FindAllTaskService implements IFindAllTaskController {

    constructor(private readonly taskRepository: ITaskRepository) { }

    async findAll(): Promise<Task[]> {
        return await this.taskRepository.findAll()
    }
}