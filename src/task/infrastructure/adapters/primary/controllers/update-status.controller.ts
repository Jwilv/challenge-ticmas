import { UpdateStatusService } from "../../../../aplication/update-status/update-status.service";
import { mongoRepository } from "../../secondary/mongo/mongo";

export const updateStatusService = new UpdateStatusService(mongoRepository)