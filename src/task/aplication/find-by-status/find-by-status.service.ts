import { TaskStatus, Task, taskStatus } from "../../domain/entity/task";
import { InvalidStatusArgumentError } from "../../domain/exception/invalid-status-argument-error";
import { IFindByStatusController } from "../../domain/ports/primary/api/find-by-status.controller.interface";
import { ITaskRepository } from "../../domain/ports/secondary/db/task-respository-interface";


export class FindByStatusService implements IFindByStatusController {

    constructor(private readonly taskRepository: ITaskRepository) { }

    async getByStatus(status: TaskStatus): Promise<Task[]> {
        this.validateStatus(status)
        return await this.taskRepository.findByStatus(status)
    }

    private validateStatus(status: TaskStatus) {
        if (status && !taskStatus.includes(status)) {
            throw new InvalidStatusArgumentError()
        }
    }
}