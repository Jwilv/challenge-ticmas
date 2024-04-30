import { SimpleTask, Task, TaskStatus } from "../../../entity/task"

export interface ITaskRepository {
    findAll(): Promise<Task[]>
    findById(id: string): Promise<Task>
    findDays(id: string): Promise<number>
    findByStatus(status: TaskStatus): Promise<Task[]>
    create(task: SimpleTask): Promise<Task>
    update(task: Task): Promise<Task>
    updateStatus(id: string, status: TaskStatus): Promise<Task>
    remove(id: string): Promise<void>
}