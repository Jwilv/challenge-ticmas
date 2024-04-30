export interface IFindTaskDaysController {
    getDays(id: string): Promise<number>;
}