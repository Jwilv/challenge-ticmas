import { Task } from "../../../entity/task";

export interface IFindAllTaskController {
    findAll(): Promise<Task[]>
}