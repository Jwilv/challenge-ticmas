import { FindByStatusService } from '../../../../aplication/fin-by-status/find-by-status.service';
import { mongoRepository } from '../../secondary/mongo/mongo';


export const findByStatusController = new FindByStatusService(mongoRepository)