import { ForTasking } from "../ports/drivers/for-tasking";
import { Task as RepoTask } from "../../../repository/app/schemas"
import { ForTaskManagement } from "../ports/drivens";
import { Task } from "./schemas";


export class DashboardApi implements ForTasking {

    constructor(private readonly forTaskManagement: ForTaskManagement) { }

    async getTaskById(id: string): Promise<RepoTask> {
        return await this.forTaskManagement.getTaskById(id)
    }

    async getAllTasks(): Promise<RepoTask[]> {
        return await this.forTaskManagement.getAllTasks()
    }

    async getTaskByStatus(status: string): Promise<RepoTask[]> {
        return await this.forTaskManagement.getTaskByStatus(status)
    }

    async createTask(task: Task): Promise<RepoTask> {
        const taskCreated = await this.forTaskManagement.createTask(task)
        console.log(taskCreated)
        return taskCreated
    }

    async updateTask(task: RepoTask): Promise<RepoTask> {
        return await this.forTaskManagement.updateTask(task)
    }

    async deleteTaskById(id: string): Promise<{ id: string }> {
        return await this.forTaskManagement.deleteTaskById(id)
    }

}