import { FindTaskDaysService } from "../../../../aplication/find-task-days.ts/find-task-days.service";
import { mongoRepository } from "../../secondary/mongo/mongo";


export const findTaskDaysController = new FindTaskDaysService(mongoRepository)