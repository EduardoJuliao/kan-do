import { ITask } from "./ITask";

export interface ITaskList{
    id: string;
    name: string;
    tasks?: ITask[];
    color?: string;
}