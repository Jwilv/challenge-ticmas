import { UpdateTaskService } from "../../../../aplication/update-task/update-task.service";
import { mongoRepository } from "../../secondary/mongo/mongo";

export const updateTaskService = new UpdateTaskService(mongoRepository)