import { FindTaskByIdService } from "../../../../aplication/find-task-by-id/find-task-by-id.service";
import { mongoRepository } from "../../secondary/mongo/mongo";

export const findTaskByIdService = new FindTaskByIdService(mongoRepository)