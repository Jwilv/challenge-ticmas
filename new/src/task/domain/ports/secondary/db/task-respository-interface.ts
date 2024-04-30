import { SimpleTask, Task } from "../../../entity/task"

export interface ITaskRepository {
    findAll(): Promise<Task[]>
    findById(id: string): Promise<Task>
    create(task: SimpleTask): Promise<Task>
    update(task: Task): Promise<Task>
    remove(id: string): Promise<void>
}