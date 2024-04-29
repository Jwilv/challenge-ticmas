import { dbConnection } from '../../infrastructure/dbConfig';
import { MonitorAdapter } from '../adapters/drivens/monitor-adapter';
import { TaskManagerProxy } from '../adapters/drivers/task-manager-proxy';
import { Repository } from './repository';
const compositionMock = () => {

    const monitor = new MonitorAdapter();

    const repository = new Repository(monitor);

    const taskManagerProxy = new TaskManagerProxy(repository);

    return { taskManagerProxy }
}

export const { taskManagerProxy } = compositionMock()