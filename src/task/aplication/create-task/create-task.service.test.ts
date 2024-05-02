import { describe, it } from "@jest/globals";
import { MongooseRepositoryMemory } from "../../infrastructure/adapters/secondary/mongo/mongoose-repository-memory";
import { CreateTaskService } from "./create-task.service";
import { TaskStatus } from "../../domain/entity/task";
import { InvalidStatusArgumentError } from "../../domain/exception/invalid-status-argument-error";

describe('CreateTaskService', () => {

    it('should create a task', async () => {
        const repository = new MongooseRepositoryMemory();
        const createTaskService = new CreateTaskService(repository);

        createTaskService.create({ title: 'title', description: 'description', status: 'pending' })

        const results = await repository.findAll();
        const task = results.find(Boolean);

        expect(task).toBeDefined();
    })

    it('should throw an exception', () => {
        const repository = new MongooseRepositoryMemory();
        const createTaskService = new CreateTaskService(repository);

        expect(() => createTaskService.create({ title: 'title', description: 'description', status: 'a' as TaskStatus }))
            .rejects.toBeInstanceOf(InvalidStatusArgumentError)
    })

})