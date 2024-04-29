import { Router, Request, Response } from 'express'
import { dashboardApiProxyAdapter } from '../services/dashboard-api/app/composition-root';
import { validationTaskApi, validationTaskRepo } from '../services/dashboard-api/app/validations/validation';
import { validateFields } from '../services/dashboard-api/app/middlewares/validate-fields';

const taskRouter = Router();

taskRouter.get('/', (req: Request, res: Response) => dashboardApiProxyAdapter.getAllTasks(req, res));

//validation de api
taskRouter.post('/', [...validationTaskApi, validateFields],
    (req: Request, res: Response) => dashboardApiProxyAdapter.createTask(req, res)
);

taskRouter.patch('/', [...validationTaskRepo, validateFields],
    (req: Request, res: Response) => dashboardApiProxyAdapter.updateTask(req, res)
);

taskRouter.get('/:id', (req: Request, res: Response) => dashboardApiProxyAdapter.getTaskById(req, res));

taskRouter.delete('/:id', (req: Request, res: Response) => dashboardApiProxyAdapter.deleteTaskById(req, res));

taskRouter.get('/status/:status', (req: Request, res: Response) => dashboardApiProxyAdapter.getTaskByStatus(req, res));

export default taskRouter