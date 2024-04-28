import { describe, it, expect } from 'vitest'
import { TaskManagementStub } from '../adapters/drivens/task-management-stub'
import { DashboardApi } from './dashboard-api'
import { Task as RepoTask } from '../../../repository/app/schemas'
import { Task } from './schemas'

describe('DashboardApi', () => {

  const forTaskManagement = new TaskManagementStub()

  const dashboardApiMook = new DashboardApi(forTaskManagement)

  it('should create a task', async () => {
    //GIVEN 
    const mockedParams: Task = { description: 'any_description', status: 'any_status', title: 'any_title' }

    const expectedResult: RepoTask = {
      id: 'TestID',
      title: 'TestTitle',
      description: 'TestDescription',
      status: 'TestStatus',
      createdAt: new Date("1995-12-17T03:24:00"),
    };

    //WHEN
    const result = await dashboardApiMook.createTask(mockedParams)

    //THEN
    expect(result).toEqual(expectedResult)
  })

  it('should Delete a task', async () => {
    //GIVEN 
    const mockedParams: RepoTask = {
      id: 'TestID',
      title: 'TestTitle',
      description: 'TestDescription',
      status: 'TestStatus',
      createdAt: new Date("1995-12-17T03:24:00"),
    };

    const expectedResult: { id: string } = {
      id: 'TestID',
    };

    //WHEN
    const result = await dashboardApiMook.deleteTaskById(mockedParams.id)

    //THEN
    expect(result).toEqual(expectedResult)
  })

  it('should get a task by id', async () => {
    //GIVEN 
    const expectedResult: RepoTask = {
      id: 'TestID',
      title: 'TestTitle',
      description: 'TestDescription',
      status: 'TestStatus',
      createdAt: new Date("1995-12-17T03:24:00"),
    };

    //WHEN
    const result = await dashboardApiMook.getTaskById('TestID')

    //THEN
    expect(result).toEqual(expectedResult)
  })

  it('should get all tasks', async () => {
    //GIVEN 
    const expectedResult: RepoTask[] = [
      {
        id: 'TestID',
        title: 'TestTitle',
        description: 'TestDescription',
        status: 'TestStatus',
        createdAt: new Date("1995-12-17T03:24:00"),
      }
    ]

    //WHEN
    const result = await dashboardApiMook.getAllTasks()

    //THEN
    expect(result).toEqual(expectedResult)
  })

  it('should get by status', async () => {
    //GIVEN 
    const expectedResult: RepoTask[] = [
      {
        id: 'TestID',
        title: 'TestTitle',
        description: 'TestDescription',
        status: 'TestStatus',
        createdAt: new Date("1995-12-17T03:24:00"),
      }
    ]

    //WHEN
    const result = await dashboardApiMook.getTaskByStatus(expectedResult[0].status)

    //THEN
    expect(result[0].status).toEqual(expectedResult[0].status);
    expect(result).toEqual(expectedResult);
  })

  it('should update a task', async () => {
    
    //GIVEN 
    const mockedParams: RepoTask = {
      id: 'TestID',
      title: 'TestTitle',
      description: 'TestDescription',
      status: 'TestStatus',
      createdAt: new Date("1995-12-17T03:24:00"),
    }

    const expectedResult: RepoTask = {
      id: 'TestID',
      title: 'NewTestTitle',
      description: 'NewTestDescription',
      status: 'TestStatus',
      createdAt: new Date("1995-12-17T03:24:00"),
    }


    //WHEN
    const result = await dashboardApiMook.updateTask(mockedParams)

    //THEN
    expect(result).toEqual(expectedResult);
  })

})