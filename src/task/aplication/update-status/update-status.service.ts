import { TaskStatus, Task, taskStatus } from '../../domain/entity/task';
import { InvalidStatusArgumentError } from '../../domain/exception/invalid-status-argument-error';
import { IUpdateStatusController } from '../../domain/ports/primary/api/update-status.controller.interface';

export class UpdateStatusService implements IUpdateStatusController {
    constructor(private readonly taskRepository: IUpdateStatusController) { }

    async updateStatus(id: string, status: TaskStatus): Promise<Task> {
        this.validateStatus(status)
        return await this.taskRepository.updateStatus(id, status)
    }

    private validateStatus(status: TaskStatus) {
        if (status && !taskStatus.includes(status)) {
            throw new InvalidStatusArgumentError()
        }
    }
}