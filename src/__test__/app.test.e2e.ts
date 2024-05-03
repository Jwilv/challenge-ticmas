import supertest from 'supertest';
import mongoose from 'mongoose';
import { app, server } from '../../index';
import { test, afterAll, beforeEach } from '@jest/globals';
import { Task, SimpleTask } from '../task/domain/entity/task';
import { TaskModel } from '../task/infrastructure/adapters/secondary/mongo/schemas/task';

const api = supertest(app);

const tasks: Task[] = [
    {
        id: '1',
        title: 'test',
        description: 'test',
        status: 'pending',
        createdAt: new Date("2/1/22"),
    },
    {
        id: '2',
        title: 'test',
        description: 'test',
        status: 'pending',
        createdAt: new Date("2/1/22"),
    }
]

beforeEach(async () => {
    await TaskModel.deleteMany({})
    await TaskModel.insertMany(tasks)
})

test('server respond with json', async () => {
    await api.get('/api/task')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('get all tasks', async () => {
    const response = await api.get('/api/task')
    expect(response.body.data).toHaveLength(tasks.length)
})

test('get task by id', async () => {
    const response = await api.get('/api/task/')
    const task = await response.body.data[0]
    const responseById = await api.get(`/api/task/${task.id}`)
    expect(task.id).toEqual(responseById.body.data.id)
})

test('create task', async () => {
    const newTask: SimpleTask = { title: 'api test post' }
    const response = await api.post('/api/task').send(newTask)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    expect(response.body.data.title).toEqual(newTask.title)
})

test('update task', async () => {
    const response = await api.get('/api/task/')
    const task = await response.body.data[0]
    const newTask: Task = { ...task, title: 'api test put' }

    const { body } = await api.patch(`/api/task/`).send(newTask)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    expect(newTask).toEqual(body.data)
})

test('delete task', async () => {
    const response = await api.get('/api/task/')
    const task = await response.body.data[0]
    await api.delete(`/api/task/${task.id}`)
        .expect(200)
})

test('update task status', async () => {
    const response = await api.get('/api/task/')
    const task = await response.body.data[0]
    const newTask: Task = { ...task, status: 'in-progress' }

    const { body } = await api.patch(`/api/task/${newTask.id}/status`).send(newTask)
        .expect(200)

    expect(newTask).toEqual(body.data)
})

test('get task by status', async () => {
    const response = await api.get('/api/task/')
    const task = await response.body.data[0]
    const responseByStatus = await api.get(`/api/task/status/${task.status}`)
    expect(task.status).toEqual(responseByStatus.body.data[0].status)
})

test('get task by days', async () => {
    const response = await api.get('/api/task/')
    const task = await response.body.data[0]
    const responseByDays = await api.get(`/api/task/${task.id}/days`)

    const daysInMilliseconds = new Date().getTime() - new Date(task.createdAt).getTime();
    const days = daysInMilliseconds / (1000 * 60 * 60 * 24); //Convert milliseconds to days

    expect(Math.round(days)).toEqual(Math.round(responseByDays.body.data.days))
})

afterAll(() => {
    mongoose.connection.close()
    server.close()
})