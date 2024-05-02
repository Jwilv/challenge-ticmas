import { FindByStatusService } from '../../../../aplication/find-by-status/find-by-status.service';
import { mongoRepository } from '../../secondary/mongo/mongo';


export const findByStatusService = new FindByStatusService(mongoRepository)