import { describe, it, expect } from '@jest/globals';
import { MongooseRepositoryMemory } from "../../infrastructure/adapters/secondary/mongo/mongoose-repository-memory";
import { FindAllTaskService } from "../find-all-task/find-all-task.service";
import { CreateTaskService } from "../create-task/create-task.service";
import { TaskStatus } from '../../domain/entity/task';
import { FindTaskByIdService } from "./find-task-by-id.service";

describe('CreateTaskService', () => {

    it('should find a task by id', async () => {
        const repository = new MongooseRepositoryMemory();
        const createTaskService = new CreateTaskService(repository);
        const findAllTaskService = new FindAllTaskService(repository);
        const findTaskByIs = new FindTaskByIdService(repository);

        await createTaskService.create({ title: 'title', description: 'description', status: 'pending' })
        const response = await findAllTaskService.findAll();
        const task = response.find(Boolean);

        const result = await findTaskByIs.findById(task?.id!);

        expect(task).toEqual(result);
    })

})