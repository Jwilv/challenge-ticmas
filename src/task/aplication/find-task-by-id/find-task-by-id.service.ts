import { Task } from "../../domain/entity/task";
import { IFindTaskByIdController } from "../../domain/ports/primary/api/find-task-by-id.controller.interface";
import { ITaskRepository } from "../../domain/ports/secondary/db/task-respository-interface";

export class FindTaskByIdService implements IFindTaskByIdController {

    constructor(private readonly taskRepository: ITaskRepository) { }

    async findById(id: string): Promise<Task> {
        if (!id) throw new Error('Id not provided')
        return await this.taskRepository.findById(id)
    }

}