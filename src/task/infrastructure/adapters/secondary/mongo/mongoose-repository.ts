import { SimpleTask, Task, TaskStatus } from '../../../../domain/entity/task';
import { ITaskRepository } from '../../../../domain/ports/secondary/db/task-respository-interface';
import { TaskModel } from './schemas/task';

export class MongooseRepository implements ITaskRepository {

    async create(task: SimpleTask): Promise<Task> {
        const newTask = await TaskModel.create(task);
        if (!newTask) {
            throw new Error('Task not created');
        }
        return newTask;
    }

    async findById(id: string): Promise<Task> {
        const task = await TaskModel.findOne({ _id: id });
        if (!task) {
            throw new Error('Task not found');
        }
        return task;
    }

    async findAll(): Promise<Task[]> {
        const tasks = await TaskModel.find();
        if (!tasks) {
            throw new Error('Tasks not found');
        }
        return tasks;
    }

    async findByStatus(status: TaskStatus): Promise<Task[]> {
        return await TaskModel.find({ status })
    }

    async findDays(id: string): Promise<number> {
        const task = await TaskModel.findById({ _id: id })
        if (!task) {
            throw new Error('Task not found');
        }
        
        const daysInMilliseconds = new Date().getTime() - new Date(task.createdAt).getTime();
        const days = daysInMilliseconds / (1000 * 60 * 60 * 24); //Convert milliseconds to days
        return days
    }

    async update(task: Task): Promise<Task> {
        const { id, createdAt, ...rest } = task
        const newTask = await TaskModel.findOneAndUpdate({ _id: id }, rest)
        if (!newTask) {
            throw new Error('Task not found');
        }
        return newTask
    }

    async updateStatus(id: string, status: TaskStatus): Promise<Task> {
        const newTask = await TaskModel.findOneAndUpdate({ _id: id }, { status: status })
        if (!newTask) {
            throw new Error('Task not found');
        }
        newTask.status = status
        return newTask
    }

    async remove(id: string): Promise<void> {
        await TaskModel.deleteOne({ _id: id })
    }
}