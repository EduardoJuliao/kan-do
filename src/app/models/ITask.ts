import { IUser } from "./IUser";
import { ITag } from "./ITag";
import { IComment } from "./IComment";
import { Priority } from "../enums/priority";

export interface ITask{
    id: string;
    listId: string;
    name: string;
    description: string,
    whenCreated: Date,
    due?: Date,
    estimated?: Date,
    whenStarted?: Date,
    whenFinished?: Date,
    
    priority: Priority
    whoOpened: IUser,
    participants: IUser[],
    tags?: ITag[]
    subTasks?: ITask[],
    comments?: IComment[],
}