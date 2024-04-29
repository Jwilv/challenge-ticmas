import { Repository } from "../../app/repository";
import { Task } from "../../app/schemas/Task";
import { Task as ApiTask } from "../../../services/dashboard-api/app/schemas";
import { ForManagingTask } from "../../ports/drivers";

export class TaskManagerProxy implements ForManagingTask {
    constructor(
        private readonly repository: Repository
    ) { }

    async create(task: ApiTask): Promise<Task> {
        return await this.repository.create(task)
    }

    async update(task: Task): Promise<Task> {
        return await this.repository.update(task)
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.deleteById(id)
    }

    async getAll(): Promise<Task[]> {
        return await this.repository.getAll()
    }

    async getByStatus(status: string): Promise<Task[]> {
        return await this.repository.getByStatus(status)
    }

    async getById(id: string): Promise<Task> {
        return await this.repository.getById(id)
    }
}