
import { ForTaskManagement } from '../../ports/drivens/for-task-management';
import { Task as RepoTask } from '../../../../repository/app/schemas';
import { Task } from '../../app/schemas'

const TaskDBMock = {
    id: 'TestID',
    title: 'TestTitle',
    description: 'TestDescription',
    status: 'TestStatus',
    createdAt: new Date("1995-12-17T03:24:00"),
}

const UpdatedTaskDBMock = {
    id: 'TestID',
    title: 'NewTestTitle',
    description: 'NewTestDescription',
    status: 'TestStatus',
    createdAt: new Date("1995-12-17T03:24:00"),
}

export class TaskManagementStub implements ForTaskManagement {

    createTask(_task: Task): Promise<RepoTask> {
        return Promise.resolve(TaskDBMock)
    }

    updateTask(_task: RepoTask): Promise<RepoTask> {
        return Promise.resolve(UpdatedTaskDBMock)
    }

    deleteTaskById(_id: string): Promise<{ id: string }> {
        return Promise.resolve({ id: TaskDBMock.id })
    }

    getAllTasks(): Promise<RepoTask[]> {
        return Promise.resolve([TaskDBMock])
    }

    getTaskByStatus(_status: string): Promise<RepoTask[]> {
        return Promise.resolve([TaskDBMock])
    }

    getTaskById(_id: string): Promise<RepoTask> {
        return Promise.resolve(TaskDBMock)
    }

}