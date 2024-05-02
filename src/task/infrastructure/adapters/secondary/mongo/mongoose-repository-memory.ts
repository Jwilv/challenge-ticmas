import { SimpleTask, Task, TaskStatus } from "../../../../domain/entity/task";
import { ITaskRepository } from "../../../../domain/ports/secondary/db/task-respository-interface";

import { v4 as uuidv4 } from "uuid";

export class MongooseRepositoryMemory implements ITaskRepository {

    private tasks: Task[] = [];

    async create(task: SimpleTask): Promise<Task> {

        const payload: Task = {
            ...task,
            description: task.description || '',
            id: uuidv4(),
            createdAt: new Date("2/1/22"),
            status: 'pending'
        }

        this.tasks.push(payload)

        return Promise.resolve(payload);
    }

    async findById(id: string): Promise<Task> {
        const task = await this.tasks.find(task => task.id === id);
        if (!task) {
            throw new Error('Task not found');
        }
        return task;
    }

    async findAll(): Promise<Task[]> {
        return this.tasks;
    }

    async findByStatus(status: TaskStatus): Promise<Task[]> {
        return Promise.resolve(this.tasks.filter(task => task.status === status))
    }

    async findDays(id: string): Promise<number> {
        const task = await this.findById(id)

        const daysInMilliseconds = new Date().getTime() - new Date(task.createdAt).getTime();
        const days = daysInMilliseconds / (1000 * 60 * 60 * 24); //Convert milliseconds to days
        return days
    }

    async update(task: Task): Promise<Task> {
        const { id, createdAt, ...rest } = task
        const findTask = await this.findById(task.id)
        const newTask = { ...findTask, ...rest }

        this.remove(findTask.id)
        this.tasks = [...this.tasks, newTask]
        return newTask
    }

    async updateStatus(id: string, status: TaskStatus): Promise<Task> {
        const task = await this.findById(id)

        return await this.update({ ...task, status })
    }

    async remove(id: string): Promise<void> {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
}