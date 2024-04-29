
import { ForTaskManagement } from '../../ports/drivens/for-task-management';
import { Task as RepoTask } from '../../../../repository/app/schemas';
import { Task } from '../../app/schemas'
import { ForManagingTask } from '../../../../repository/ports/drivers';
import { taskManagerProxy } from '../../../../repository/app/composition-root';

export class TaskManagement implements ForTaskManagement {

    createTask(task: Task): Promise<RepoTask> {
        return taskManagerProxy.create(task)
    }

    updateTask(task: RepoTask): Promise<RepoTask> {
        return taskManagerProxy.update(task)
    }

    deleteTaskById(id: string): Promise<void> {
        return taskManagerProxy.deleteById(id)
    }

    getAllTasks(): Promise<RepoTask[]> {
        return taskManagerProxy.getAll()
    }

    getTaskByStatus(status: string): Promise<RepoTask[]> {
        return taskManagerProxy.getByStatus(status)
    }

    getTaskById(id: string): Promise<RepoTask> {
        return taskManagerProxy.getById(id)
    }

}