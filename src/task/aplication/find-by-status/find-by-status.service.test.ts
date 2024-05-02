import { describe, it } from "@jest/globals";
import { MongooseRepositoryMemory } from "../../infrastructure/adapters/secondary/mongo/mongoose-repository-memory";
import { CreateTaskService } from "../create-task/create-task.service";
import { TaskStatus } from '../../domain/entity/task';
import { FindByStatusService } from "./find-by-status.service";
import { InvalidStatusArgumentError } from "../../domain/exception/invalid-status-argument-error";

describe('CreateTaskService', () => {

    it('should find by status', async () => {
        const repository = new MongooseRepositoryMemory();
        const createTaskService = new CreateTaskService(repository);
        const findByStatusService = new FindByStatusService(repository);
        const status: TaskStatus = 'pending'
        await createTaskService.create({ title: 'title', description: 'description', status: 'pending' })

        const results = await findByStatusService.getByStatus(status);

        expect(status).toEqual(results.find(Boolean)?.status);
    })

    it('should throw an exception', async () => {
        const repository = new MongooseRepositoryMemory();
        const findByStatusService = new FindByStatusService(repository);
        const createTaskService = new CreateTaskService(repository);

        await createTaskService.create({ title: 'title', description: 'description', status: 'pending' })

        expect(() => findByStatusService.getByStatus('a' as TaskStatus))
            .rejects.toBeInstanceOf(InvalidStatusArgumentError)
    })

})