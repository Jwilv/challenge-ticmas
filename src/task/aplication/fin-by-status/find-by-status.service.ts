import { TaskStatus, Task } from "../../domain/entity/task";
import { IFindByStatusController } from "../../domain/ports/primary/api/find-by-status.controller.interface";
import { ITaskRepository } from "../../domain/ports/secondary/db/task-respository-interface";


export class FindByStatusService implements IFindByStatusController {

    constructor(private readonly taskRepository: ITaskRepository) { }

    async getByStatus(status: TaskStatus): Promise<Task[]> {
        return await this.taskRepository.findByStatus(status)
    }
}