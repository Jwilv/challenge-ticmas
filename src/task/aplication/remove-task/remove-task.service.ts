import { IRemoveTaskController } from '../../domain/ports/primary/api/remove-task.controller.interface';
import { ITaskRepository } from '../../domain/ports/secondary/db/task-respository-interface';

export class RemoveTaskService implements IRemoveTaskController {

    constructor(private readonly taskRepository: ITaskRepository) { }

    async remove(id: string): Promise<void> {
        await this.taskRepository.remove(id)
    }
}