import { CreateTaskService } from "../../../../aplication/create-task/create-task.service";
import { mongoRepository } from "../../secondary/mongo/mongo";

export const createTaskController = new CreateTaskService(mongoRepository)