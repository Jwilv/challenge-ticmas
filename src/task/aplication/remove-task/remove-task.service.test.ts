import { describe } from "@jest/globals";
import { CreateTaskService } from "../create-task/create-task.service";
import { RemoveTaskService } from "./remove-task.service";
import { MongooseRepositoryMemory } from "../../infrastructure/adapters/secondary/mongo/mongoose-repository-memory";

describe('RemoveTaskService', () => {

    it('should remove a task', async () => {
        const repository = new MongooseRepositoryMemory();
        const createTaskService = new CreateTaskService(repository);
        const removeTaskService = new RemoveTaskService(repository);

        const task = await createTaskService.create({ title: 'title', description: 'description', status: 'pending' });

        await removeTaskService.remove(task.id);
        const results = await repository.findAll();
        expect(results).toEqual([]);
    })

})