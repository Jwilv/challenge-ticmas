import { Router } from 'express'
import { dashboardApiProxyAdapter } from '../services/dashboard-api/app/composition-root';

const taskRouter = Router();

taskRouter.get('/', (req, res) => dashboardApiProxyAdapter.getAllTasks(req, res));

taskRouter.post('/', (req, res) => dashboardApiProxyAdapter.createTask(req, res));

taskRouter.patch('/', (req, res) => dashboardApiProxyAdapter.updateTask(req, res));

taskRouter.get('/:id', (req, res) => dashboardApiProxyAdapter.getTaskById(req, res));

taskRouter.delete('/:id', (req, res) => dashboardApiProxyAdapter.deleteTaskById(req, res));

taskRouter.get('/status/:status', (req, res) => dashboardApiProxyAdapter.getTaskByStatus(req, res));

export default taskRouter