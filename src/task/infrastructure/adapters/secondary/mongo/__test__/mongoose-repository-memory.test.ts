import { describe, it, expect } from '@jest/globals'

import { MongooseRepositoryMemory } from '../mongoose-repository-memory'
import { Task } from '../../../../../domain/entity/task';

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
        expect(tasks).toEqual(tasks)
    })

    it('should create a task', async () => {
        //GIVEN
        const task = {
            title: 'title',
            description: 'description'
        }

        const expectResult = {
            ...task,
            id: '5',
            createdAt: new Date("2/1/22"),
            status: 'pending'
        }

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const taskRepository = await repository.create(task)

        //THEN
        expect(expectResult).toEqual(taskRepository)
    })

    it('should find a task by id', async () => {
        //GIVEN
        const expectResult = {
            id: '1',
            title: 'title',
            description: 'description',
            status: 'pending',
            createdAt: new Date("2/1/22")
        }

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const taskRepository = await repository.findById('1')

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

        const expectResult: Task = {
            id: '1',
            title: 'update title',
            description: 'description',
            createdAt: new Date("2/1/22"),
            status: 'pending'
        }

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const taskRepository = await repository.update(expectResult)

        //THEN
        expect(expectResult).toEqual(taskRepository)
    })

    it('should update a task status by id', async () => {
        //GIVEN
        const expectResult: Task = {
            id: '1',
            title: 'title',
            description: 'description',
            createdAt: new Date("2/1/22"),
            status: 'finished'
        }

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const taskRepository = await repository.updateStatus('1', 'finished')

        //THEN
        expect(expectResult).toEqual(taskRepository)
    })

    it('should find days', async () => {
        //GIVEN
        const daysInMilliseconds = new Date().getTime() - new Date(tasks[0].createdAt).getTime();
        const days = daysInMilliseconds / (1000 * 60 * 60 * 24); //Convert milliseconds to days
        const expectResult = days

        //WHEN
        const repository = new MongooseRepositoryMemory()
        const taskRepository = await repository.findDays('1')

        //THEN
        expect(expectResult).toEqual(taskRepository)
    })

    it('should find tasks by status', async () => {
        //GIVEN
        const expectResult = tasks
        //WHEN
        const repository = new MongooseRepositoryMemory()
        const taskRepository = await repository.findByStatus('pending')

        //THEN
        expect(expectResult).toEqual(taskRepository)
    })

})