import { Router, Request, Response } from 'express'
import { validateFields } from '../../../domain/middlewares/validate-fields';
import { validationSimpleTask, validationTask } from '../../../domain/validations/validation';
import { apiTaskController } from '../../primary/controllers/api-task-controller';

const taskRouter = Router();

taskRouter.get('/', (req: Request, res: Response) => apiTaskController.getAll(req, res));

taskRouter.post('/', [...validationSimpleTask, validateFields],
    (req: Request, res: Response) => apiTaskController.create(req, res)
);

taskRouter.patch('/', [...validationTask, validateFields],
    (req: Request, res: Response) => apiTaskController.update(req, res)
);

taskRouter.get('/:id', (req: Request, res: Response) => apiTaskController.getById(req, res));

taskRouter.delete('/:id', (req: Request, res: Response) => apiTaskController.remove(req, res));

taskRouter.patch('/:id/status', (req: Request, res: Response) => apiTaskController.updateStatus(req, res));

taskRouter.get('/status/:status', (req: Request, res: Response) => apiTaskController.getByStatus(req, res));

taskRouter.get('/:id/days', (req: Request, res: Response) => apiTaskController.getDays(req, res));

export default taskRouter