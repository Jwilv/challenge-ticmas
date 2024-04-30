import { ITaskRepository } from '../../domain/ports/secondary/db/task-respository-interface';
import { IFindTaskDaysController } from './../../domain/ports/primary/api/find-task-days.controller.interface';

export class FindTaskDaysService implements IFindTaskDaysController {
    constructor(private readonly taskRepository: ITaskRepository) { }

     async getDays(id: string): Promise<number> {
        return await this.taskRepository.findDays(id)
    }
}