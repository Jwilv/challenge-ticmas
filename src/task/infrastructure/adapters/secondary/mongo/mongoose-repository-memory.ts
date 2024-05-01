import { SimpleTask, Task, TaskStatus } from "../../../../domain/entity/task";
import { ITaskRepository } from "../../../../domain/ports/secondary/db/task-respository-interface";

export class MongooseRepositoryMemory implements ITaskRepository {

    private tasks: Task[] = [
        {
            id: '1',
            title: 'title',
            description: 'description',
            status: 'pending',
            createdAt: new Date("2/1/22")
        },
        {
            id: '2',
            title: 'title',
            description: 'description',
            status: 'pending',
            createdAt: new Date("2/1/22")
        }
    ];

    async create(task: SimpleTask): Promise<Task> {
        await this.tasks.push({
            ...task,
            id: '5',
            createdAt: new Date("2/1/22"),
            status: 'pending'
        });

        const newTask = await this.tasks.find(task => task.id === '5');

        if (!newTask) {
            throw new Error('Task not created');
        }

        return newTask;
    }

    async findById(id: string): Promise<Task> {
        const task = await this.tasks.find(task => task.id === id);
        if (!task) {
            throw new Error('Task not found');
        }
        return task;
    }

    async findAll(): Promise<Task[]> {
        const tasks = this.tasks
        if (!tasks) {
            throw new Error('Tasks not found');
        }
        return tasks;
    }

    async findByStatus(status: TaskStatus): Promise<Task[]> {
        return await this.tasks.filter(task => task.status === status)
    }

    async findDays(id: string): Promise<number> {
        const task = await this.tasks.find(task => task.id === id)
        if (!task) {
            throw new Error('Task not found');
        }

        const daysInMilliseconds = new Date().getTime() - new Date(task.createdAt).getTime();
        const days = daysInMilliseconds / (1000 * 60 * 60 * 24); //Convert milliseconds to days
        return days
    }

    async update(task: Task): Promise<Task> {
        const { id, createdAt, ...rest } = task
        const findTask = await this.tasks.find(task => task.id === id)
        if (!findTask) {
            throw new Error('Task not found');
        }
        const newTask = { ...findTask, ...rest }
        return newTask
    }

    async updateStatus(id: string, status: TaskStatus): Promise<Task> {
        const task = await this.tasks.find(task => task.id === id)
        if (!task) {
            throw new Error('Task not found');
        }
        const newTask = { ...task, status }
        return newTask
    }

    async remove(id: string): Promise<void> {
        await this.tasks.filter(task => task.id !== id)
    }
}