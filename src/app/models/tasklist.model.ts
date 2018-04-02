import { TaskModel } from './task.model';
export interface TaskListModel{
    id: string;
    name: string;
    color?: string;
    tasks?: TaskModel[];
}