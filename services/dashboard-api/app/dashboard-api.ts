import { ForTasking } from "../ports/drivers/for-tasking";
import { Task as RepoTask } from "../../../repository/app/schemas"
import { ForTaskManagement } from "../ports/drivens";
import { Task } from "./schemas";
import { Request, Response } from "express";


export class DashboardApi implements ForTasking {

    constructor(private readonly forTaskManagement: ForTaskManagement) { }

    async getTaskById(req: Request, resp: Response): Promise<Response> {
        const { id } = req.params
        
        if (!id) {
            return resp.status(400).json({
                ok: false,
                message: 'Id not found'
            })
        }

        try {
            const task = await this.forTaskManagement.getTaskById(id)
            return resp.status(200).json({
                ok: true,
                data: task
            })
        } catch (error) {
            return resp.status(404).json({
                ok: false,
                message: 'Task not found'
            })
        }
    }

    async getAllTasks(_req: Request, res: Response): Promise<Response> {
        try {
            const tasks = await this.forTaskManagement?.getAllTasks()
            return res.status(200).json({
                ok: true,
                data: tasks
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                message: 'Erro get all tasks'
            })
        }
    }

    async getTaskByStatus(req: Request, res: Response): Promise<Response> {

        const { status } = req.params

        try {
            const tasks = await this.forTaskManagement.getTaskByStatus(status)
            return res.status(200).json({
                ok: true,
                data: tasks
            })
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: 'Something went wrong'
            })
        }
    }

    async createTask(req: Request, res: Response): Promise<Response> {

        const { title, description, status } : Task = req.body
        const task = { title, description, status }

        try {
            const taskCreated = await this.forTaskManagement.createTask(task)

            return res.status(201).json({
                ok: true,
                data: taskCreated
            })

        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: 'Something went wrong'
            })
        }
    }

    async updateTask(req: Request, res: Response): Promise<Response> {

        const { title, description, status, createdAt, id }: RepoTask = req.body
        const task = { title, description, status, createdAt, id }

        try {
            const taskUpdated = await this.forTaskManagement.updateTask(task)
            return res.status(200).json({
                ok: true,
                data: taskUpdated
            })
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: 'Something went wrong'
            })
        }
    }

    async deleteTaskById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        try {
            await this.forTaskManagement.deleteTaskById(id);
            return res.status(200).json({
                ok: true,
                message: 'Task deleted successfully'
            })
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: 'Something went wrong'
            })
        }
    }

}