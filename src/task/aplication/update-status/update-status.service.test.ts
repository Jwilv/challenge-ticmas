import { describe } from "node:test";
import { MongooseRepositoryMemory } from "../../infrastructure/adapters/secondary/mongo/mongoose-repository-memory";
import { CreateTaskService } from "../create-task/create-task.service";
import { UpdateStatusService } from "./update-status.service";
import { InvalidStatusArgumentError } from "../../domain/exception/invalid-status-argument-error";
import { TaskStatus } from "../../domain/entity/task";

describe('UpdateStatusService', () => {

    it('should update status', async () => {
        const repository = new MongooseRepositoryMemory();
        const createTaskService = new CreateTaskService(repository);
        const updateStatusService = new UpdateStatusService(repository);

        const task = await createTaskService.create({ title: 'title', description: 'description', status: 'pending' });

        const result = await updateStatusService.updateStatus(task.id, 'finished');

        expect(result.status).toBe('finished');
    })

    it('should throw an exception', async () => {
        const repository = new MongooseRepositoryMemory();
        const createTaskService = new CreateTaskService(repository);
        const updateStatusService = new UpdateStatusService(repository);

        const task = await createTaskService.create({ title: 'title', description: 'description', status: 'pending' });



        expect(() => updateStatusService.updateStatus(task.id, 'a' as TaskStatus))
            .rejects.toBeInstanceOf(InvalidStatusArgumentError)
    })
})