import { Task, TaskStatus } from "../../app/schemas/Task"
import { Task as ApiTask } from "../../../services/dashboard-api/app/schemas"


export interface ForManagingTask {
    create(task: ApiTask): Promise<Task>
    update(task: Task): Promise<Task>
    updateStatusByid(id: string, status: TaskStatus): Promise<Task>
    deleteById(id: string): Promise<void>
    getAll(): Promise<Task[]>
    getByStatus(status: TaskStatus): Promise<Task[]>
    getById(id: string): Promise<Task>
    getDays(id: string): Promise<number>
}