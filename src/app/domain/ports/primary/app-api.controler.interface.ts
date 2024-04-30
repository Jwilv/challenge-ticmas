import { Request, Response } from 'express';

export interface IAppApiController {
    getAll(req: Request, resp: Response): Promise<Response>;
    getById(req: Request, resp: Response): Promise<Response>;
    getByStatus(req: Request, resp: Response): Promise<Response>;
    getDays(req: Request, resp: Response): Promise<Response>;
    create(req: Request, resp: Response): Promise<Response>;
    update(req: Request, resp: Response): Promise<Response>;
    updateStatus(req: Request, resp: Response): Promise<Response>;
    remove(req: Request, resp: Response): Promise<Response>;
}