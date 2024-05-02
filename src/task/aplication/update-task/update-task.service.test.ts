import { TaskStatus } from "../../domain/entity/task";
import { InvalidStatusArgumentError } from "../../domain/exception/invalid-status-argument-error";
import { MongooseRepositoryMemory } from "../../infrastructure/adapters/secondary/mongo/mongoose-repository-memory";
import { CreateTaskService } from "../create-task/create-task.service";
import { UpdateTaskService } from "./update-task.service";


describe('UpdateTaskService', () => {

    it('should update a task', async () => {
        const repository = new MongooseRepositoryMemory();
        const createTaskService = new CreateTaskService(repository);
        const updateTaskService = new UpdateTaskService(repository);
        const task = await createTaskService.create({ title: 'title', description: 'description', status: 'pending' });

        const result = await updateTaskService.update({ ...task, title: 'new title', description: 'new description', status: 'finished' });

        expect(result).toEqual({ ...task, title: 'new title', description: 'new description', status: 'finished' });
    })

    it('should throw an exception', async () => {
        const repository = new MongooseRepositoryMemory();
        const createTaskService = new CreateTaskService(repository);
        const updateTaskService = new UpdateTaskService(repository);
        const task = await createTaskService.create({ title: 'title', description: 'description', status: 'pending' });


        expect(() => updateTaskService.update({ ...task, title: 'new title', description: 'new description', status: 'a' as TaskStatus }))
            .rejects.toBeInstanceOf(InvalidStatusArgumentError)
    })
})