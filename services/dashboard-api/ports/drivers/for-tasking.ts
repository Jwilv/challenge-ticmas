import { Request, Response } from "express";

export interface ForTasking {
    getTaskById(req: Request, resp: Response): Promise<Response>;
    getAllTasks(req: Request, resp: Response): Promise<Response>;
    getTaskByStatus(req: Request, resp: Response): Promise<Response>
    createTask(req: Request, resp: Response): Promise<Response>;
    updateTask(req: Request, resp: Response): Promise<Response>;
    deleteTaskById(req: Request, resp: Response): Promise<Response>;
}