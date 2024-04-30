export interface IRemoveTaskController {
    remove(id: string): Promise<void>
}