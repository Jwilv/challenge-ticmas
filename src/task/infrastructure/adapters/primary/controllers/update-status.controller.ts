import { UpdateStatusService } from "../../../../aplication/update-status/update-status.service";
import { mongoRepository } from "../../secondary/mongo/mongo";

export const updateStatusController = new UpdateStatusService(mongoRepository)