import { describe, it, expect } from '@jest/globals'

import { MongooseRepositoryMemory } from '../mongoose-repository-memory'
import { SimpleTask, Task, TaskStatus } from '../../../../../domain/entity/task';
import { title } from 'process';

describe('MongooseRepositoryMemory', () => {

    const tasks: Task[] = [
        {
            id: '1',
            title: 'title',
            description: 'description',
            status: 'pending',
            createdAt: new Date("2/1/22")
        },
        {
            id: '2',
            title: 'title',
            description: 'description',
            status: 'pending',
            createdAt: new Date("2/1/22")
        }
    ];


    it('should find all tasks', async () => {
        const repository = new MongooseRepositoryMemory()
        const tasks = await repository.findAll()
        expect(tasks).toEqual([])
    })

    it('should create a task', async () => {
        //GIVEN
        const task = {
            title: 'title',
            description: 'description'
        }

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const taskRepository = await repository.create(task)

        //THEN
        expect(task.title).toEqual(taskRepository.title)
    })

    it('should find a task by id', async () => {
        //GIVEN
        const task = {
            title: 'title',
            description: 'description'
        }

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const expectResult = await repository.create(task)
        const taskRepository = await repository.findById(expectResult.id)

        //THEN
        expect(expectResult).toEqual(taskRepository)
    })

    it('should remove a task by id', async () => {

        //GIVEN
        const task = () => { }

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const taskRepository = await repository.remove('1')

        //THEN
        expect(task()).toEqual(taskRepository)
    })

    it('should update a task by id', async () => {
        //GIVEN

        const task: SimpleTask = {
            title: 'title',
            description: 'description',
            status: 'pending'
        }

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const newTask = await repository.create(task)

        const expectResult = {
            ...newTask,
            title: 'updated title',
        }
        const taskRepository = await repository.update(expectResult)


        //THEN
        expect(expectResult).toEqual(taskRepository)
    })

    it('should update a task status by id', async () => {
        //GIVEN
        const task: SimpleTask = {
            title: 'title',
            description: 'description',
            status: 'pending'
        }

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const newTask = await repository.create(task)
        const newStatus: TaskStatus = 'finished'

        const result = await repository.updateStatus(newTask.id, newStatus)

        //THEN
        expect(newStatus).toEqual(result.status)
    })

    it('should find days', async () => {
        //GIVEN
        const task: SimpleTask = {
            title: 'title',
            description: 'description',
            status: 'pending'
        }

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const newTask = await repository.create(task)
        const days = await repository.findDays(newTask.id)


        //THEN
        expect(typeof days).toEqual('number')
    })

    it('should find tasks by status', async () => {
        //GIVEN
        const task: SimpleTask = {
            title: 'title',
            description: 'description',
            status: 'pending'
        }

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const newTask = await repository.create(task)
        const response = await repository.findByStatus(newTask.status)
        const expectResult = response.find(Boolean)

        //THEN
        expect(expectResult?.status).toEqual(newTask.status)
    })

})