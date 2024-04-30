import { Router, Request, Response } from 'express'
import { appApiController } from '../../primary/controllers/app-api.controller';
import { validateFields } from '../../../domain/middlewares/validate-fields';
import { validationSimpleTask, validationTask } from '../../../domain/validations/validation';

const taskRouter = Router();

taskRouter.get('/', (req: Request, res: Response) => appApiController.getAll(req, res));

taskRouter.post('/', [...validationSimpleTask, validateFields],
    (req: Request, res: Response) => appApiController.create(req, res)
);

taskRouter.patch('/', [...validationTask, validateFields],
    (req: Request, res: Response) => appApiController.update(req, res)
);

taskRouter.get('/:id', (req: Request, res: Response) => appApiController.getById(req, res));

taskRouter.delete('/:id', (req: Request, res: Response) => appApiController.remove(req, res));

taskRouter.patch('/:id/status', (req: Request, res: Response) => appApiController.updateStatus(req, res));

taskRouter.get('/status/:status', (req: Request, res: Response) => appApiController.getByStatus(req, res));

taskRouter.get('/:id/days', (req: Request, res: Response) => appApiController.getDays(req, res));

export default taskRouter