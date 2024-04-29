import { ForManagingTask } from "../ports/drivers/";
import { Task, TaskModel } from "../app/schemas/Task";
import { Task as ApiTask } from '../../services/dashboard-api/app/schemas/Task';
import { ForMonitoring } from "../ports/drivens/for-monitoring";


export class Repository implements ForManagingTask {

     constructor(
        private readonly monitoring : ForMonitoring,
    ) {}

    async create(task: ApiTask): Promise<Task> {
        const newTask = await TaskModel.create(task);
        if (!newTask) {
            this.monitoring.log('Create Task', 'Task not created');
            throw new Error('Task not created');
        }
        return newTask
    }

    async update(task: Task): Promise<Task> {
        const { id, createdAt, ...rest} = task
        const newTask = await TaskModel.findOneAndUpdate({ _id: id }, rest)
        if (!newTask) {
            this.monitoring.log('Create Task', 'Task not found');
            throw new Error('Task not found');
        }
        return newTask
    }

    async deleteById(id: string): Promise<void> {
        await TaskModel.deleteOne({ _id: id })
    }

    async getAll(): Promise<Task[]> {
        return await TaskModel.find()
    }

    async getByStatus(status: string): Promise<Task[]> {
        return await TaskModel.find({ status })
    }

    async getById(id: string): Promise<Task> {
        const task = await TaskModel.findOne({ _id: id })
        if (!task) {
            this.monitoring.log('Get Task', 'Task not found');
            throw new Error('Task not found');
        }
        return task
    }
} 