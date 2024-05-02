import { Request, Response } from "express";
import { IAppApiController } from "../domain/ports/primary/app-api.controler.interface";
import { Task, TaskStatus, taskStatus } from "../../task/domain/entity/task";
import {
    createTaskService,
    findAllTaskService,
    findByStatusService,
    findTaskByIdService,
    findTaskDaysService,
    removeTaskService,
    updateStatusService,
    updateTaskService,
} from "../../task/infrastructure/adapters/primary/controllers";
import { InvalidStatusArgumentError } from "../../task/domain/exception/invalid-status-argument-error";



export class ApiTaskController implements IAppApiController {

    async create(req: Request, res: Response): Promise<Response> {
        const { title, description, status }: Task = req.body

        if (status && !taskStatus.includes(status)) {
            return res.status(400).json({
                ok: false,
                message: 'Status not found or invalid'
            })
        }

        const task = { title, description, status }

        try {
            const taskCreated = await createTaskService.create(task)

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

    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const tasks = await findAllTaskService.findAll()
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

    async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: 'Id not found'
            })
        }

        try {
            const task = await findTaskByIdService.findById(id)
            return res.status(200).json({
                ok: true,
                data: task
            })
        } catch (error) {
            return res.status(404).json({
                ok: false,
                message: 'Task not found'
            })
        }
    }

    async getByStatus(req: Request, res: Response): Promise<Response> {
        const { status } = req.params

        if (!status || !taskStatus.includes(status)) {
            return res.status(400).json({
                ok: false,
                message: 'Status not found or invalid'
            })
        }

        try {
            const tasks = await findByStatusService.getByStatus(status as TaskStatus)
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

    async getDays(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: 'Id not found'
            })
        }

        try {
            const days = await findTaskDaysService.getDays(id)
            return res.status(200).json({
                ok: true,
                data: { days }
            })
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: 'Something went wrong'
            })
        }
    }

    async remove(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: 'Id not found'
            })
        }

        try {
            await removeTaskService.remove(id);
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

    async update(req: Request, res: Response): Promise<Response> {
        const { title, description, status, createdAt, id }: Task = req.body

        if (!status || !taskStatus.includes(status)) {
            return res.status(400).json({
                ok: false,
                message: 'Status not found or invalid'
            })
        }

        const task = { title, description, status, createdAt, id }

        try {
            const taskUpdated = await updateTaskService.update(task)
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

    async updateStatus(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const { status }: Task = req.body

        if (!id || !status) {
            return res.status(400).json({
                ok: false,
                message: 'Id or status not found'
            })
        }

        if (!taskStatus.includes(status)) {
            return res.status(400).json({
                ok: false,
                message: 'Status not found or invalid'
            })
        }

        try {
            const taskUpdated = await updateStatusService.updateStatus(id, status)
            return res.status(200).json({
                ok: true,
                data: taskUpdated
            })
        } catch (error) {

            if (error instanceof InvalidStatusArgumentError) {
                return res.status(400).json({
                    ok: false,
                    message: error.message
                })
            }

            return res.status(500).json({
                ok: false,
                message: 'Something went wrong'
            })
        }
    }

}