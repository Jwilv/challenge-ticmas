# Challenge Ticmas : REST API example application

## Install

    pnpm i

## Run the app

    pnpm start

## Run the app in development

    pnpm run devs

## Run the tests

    pnpm run test

## Run the test api

    docker compose -f docker-compose-test.yml up

    pnpm run test:api

# REST API

## Get list of Task

### Request

`GET /api/task/`

    'Accept: application/json' http://localhost:3050/api/task/

### Response

    ok : boolean
    data:{
        id : string
        title : string
        description: string | undefined
        status: 'pending' | 'in-progress' | 'finished' | 'deleted'
        createdAd : Date
    }[]

## Create a new Task

### Request

`POST /api/task/`

    'Accept: application/json' http://localhost:3050/api/task/

### Body

    title : string
    description: string | undefined
    status: 'pending' | 'in-progress' | 'finished' | 'deleted' | undefined 

    status = pending value default
    

### Response

    ok : boolean
    data:{
        id : string
        title : string
        description: string | undefined
        status: 'pending' | 'in-progress' | 'finished' | 'deleted'
        createdAd : Date
    }

## Update Task

### Request

`PATCH /api/task/`

    'Accept: application/json' http://localhost:3050/api/task/

### Body

    id : string
    title : string
    description: string | undefined
    status: 'pending' | 'in-progress' | 'finished' | 'deleted' 
    createdAt : Date

### Response

    ok : boolean
    data:{
        id : string
        title : string
        description: string | undefined
        status: 'pending' | 'in-progress' | 'finished' | 'deleted'
        createdAd : Date
    }

## delete Task

### Request

`DELETE /api/task/:id`

    'Accept: application/json' http://localhost:3050/api/task/:id

### Response

    ok : boolean
    message : string


## Get a Task by id

### Request

`GET  /api/task/:id`

    'Accept: application/json' http://localhost:3050/api/task/:id

### Response

    ok : boolean
    data:{
        id : string
        title : string
        description: string | undefined
        status: 'pending' | 'in-progress' | 'finished' | 'deleted'
        createdAd : Date
    }


## Get a Task by status

### Request

`GET  /api/task/status/:status`

    'Accept: application/json' http://localhost:3050/api/task/status/:status

### Response

    ok : boolean
    data:{
        id : string
        title : string
        description: string | undefined
        status: 'pending' | 'in-progress' | 'finished' | 'deleted'
        createdAd : Date
    }

## Update status a task

### Request

`GET  /api/task/status/:id/status`

    'Accept: application/json' http://localhost:3050/api/task/:id/status

### Body

    status: 'pending' | 'in-progress' | 'finished' | 'deleted' 

### Response

    ok : boolean
    data:{
        id : string
        title : string
        description: string | undefined
        status: 'pending' | 'in-progress' | 'finished' | 'deleted'
        createdAd : Date
    }

## get days a task

### Request

`GET  /api/task/status/:id/days`

    'Accept: application/json' http://localhost:3050/api/task/:id/days

### Response

    ok : boolean
    data:{
        days : number
    }