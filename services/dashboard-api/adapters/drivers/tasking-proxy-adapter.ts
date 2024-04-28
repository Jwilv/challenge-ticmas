import { ForTasking } from '../../ports/drivers'
import { Task as TaskRepo } from '../../../../repository/app/schemas'
import { Task } from '../../app/schemas'

export class TaskingProxyAdapter implements ForTasking {
    constructor(private readonly dashboardApi: ForTasking) { }

    async getTaskById(id: string): Promise<TaskRepo> {
        return await this.dashboardApi.getTaskById(id)
    }

    async getAllTasks(): Promise<TaskRepo[]> {
        return await this.dashboardApi.getAllTasks()
    }

    async getTaskByStatus(status: string): Promise<TaskRepo[]> {
        return await this.dashboardApi.getTaskByStatus(status)
    }

    async createTask(task: Task): Promise<TaskRepo> {
        return await this.dashboardApi.createTask(task)
    }

    async updateTask(task: TaskRepo): Promise<TaskRepo> {
        return await this.dashboardApi.updateTask(task)
    }

    async deleteTaskById(id: string): Promise<void> {
        return await this.dashboardApi.deleteTaskById(id)
    }
}