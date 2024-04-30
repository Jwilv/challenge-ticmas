import { RemoveTaskService } from "../../../../aplication/remove-task/remove-task.service";
import { mongoRepository } from "../../secondary/mongo/mongo";

export const removeTaskController = new RemoveTaskService(mongoRepository);