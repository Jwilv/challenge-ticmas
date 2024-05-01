import { CreateTaskService } from "../../../../aplication/create-task/create-task.service";
import { mongoRepository } from "../../secondary/mongo/mongo";

export const createTaskService= new CreateTaskService(mongoRepository)