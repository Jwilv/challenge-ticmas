import { Task } from "../../../entity/task";

export interface IFindTaskByIdController {
    findById(id: string): Promise<Task>
}