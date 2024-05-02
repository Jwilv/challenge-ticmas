import { describe } from "@jest/globals";
import { FindTaskDaysService } from "./find-task-days.service";
import { MongooseRepositoryMemory } from "../../infrastructure/adapters/secondary/mongo/mongoose-repository-memory";
import { CreateTaskService } from "../create-task/create-task.service";
import { FindAllTaskService } from "../find-all-task/find-all-task.service";


describe('FindTaskDaysService', () => {

    it('should find task days', async () => {
        const repository = new MongooseRepositoryMemory();
        const findTaskDaysService = new FindTaskDaysService(repository);
        const createTaskService = new CreateTaskService(repository);
        const findAllTaskService = new FindAllTaskService(repository);

        await createTaskService.create({ title: 'title', description: 'description', status: 'pending' })
        const response = await findAllTaskService.findAll();
        const task = response.find(Boolean);
        const results = await findTaskDaysService.getDays(task?.id!);

        //type is number
        expect(typeof results).toBe('number');
    })
});