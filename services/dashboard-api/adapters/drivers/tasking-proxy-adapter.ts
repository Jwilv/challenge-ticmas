import { ForTasking } from '../../ports/drivers'
import { Request, Response } from 'express'

export class TaskingProxyAdapter implements ForTasking {
    constructor(private readonly dashboardApi: ForTasking) { }

    async getTaskById(req: Request, resp: Response): Promise<Response> {
        return await this.dashboardApi.getTaskById(req, resp)
    }

    async getAllTasks(req: Request, resp: Response): Promise<Response> {
        return await this.dashboardApi.getAllTasks(req, resp)
    }

    async getTaskByStatus(req: Request, resp: Response): Promise<Response> {
        return await this.dashboardApi.getTaskByStatus(req, resp)
    }

    async createTask(req: Request, resp: Response): Promise<Response> {
        return await this.dashboardApi.createTask(req, resp)
    }

    async updateTask(req: Request, resp: Response): Promise<Response> {
        return await this.dashboardApi.updateTask(req, resp)
    }

    async deleteTaskById(req: Request, resp: Response): Promise<Response> {
        return await this.dashboardApi.deleteTaskById(req, resp)
    }
}