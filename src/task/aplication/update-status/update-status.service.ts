import { TaskStatus, Task } from '../../domain/entity/task';
import { IUpdateStatusController } from '../../domain/ports/primary/api/update-status.controller.interface';

export class UpdateStatusService implements IUpdateStatusController {
    constructor(private readonly taskRepository: IUpdateStatusController) { }

    async updateStatus(id: string, status: TaskStatus): Promise<Task> {
        return await this.taskRepository.updateStatus(id, status)
    }
}