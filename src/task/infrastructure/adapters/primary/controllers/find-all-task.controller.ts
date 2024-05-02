import { FindAllTaskService } from "../../../../aplication/find-all-task/find-all-task.service";
import { mongoRepository } from "../../secondary/mongo/mongo";

export const findAllTaskService = new FindAllTaskService(mongoRepository)