import { describe } from "@jest/globals";
import { MongooseRepositoryMemory } from "../../infrastructure/adapters/secondary/mongo/mongoose-repository-memory";
import { CreateTaskService } from "../create-task/create-task.service";
import { FindAllTaskService } from "./find-all-task.service";
import { Task } from "../../domain/entity/task";

describe('CreateTaskService', () => {

    it('should find all tasks', async () => {
        const repository = new MongooseRepositoryMemory();
        const findAllTaskService = new FindAllTaskService(repository);
        const tasks: Task[] = []

        const results = await findAllTaskService.findAll();

        expect(tasks).toEqual(results);
    })

})