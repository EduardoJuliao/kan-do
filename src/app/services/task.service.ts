import { ITaskList } from './../models/ITaskList';
import { Injectable } from '@angular/core'; 
import { Chance } from "chance";
import { Priority } from '../enums/priority';

@Injectable()
export class TaskService {

    constructor() { }

    public getMyTaskList(): ITaskList[]{
        let result: ITaskList[] = [];
        let chance = new Chance();
        //list
        for(let i = 0; i < Math.floor(Math.random() * 10) + 1; i++){
            let list : ITaskList = {
                id: chance.guid(),
                name: chance.word(),
                color: chance.bool() ? chance.color({format: 'hex'}) : "",
                tasks: []
            };
            
            //tasks
            for(let j =0; j < Math.floor(Math.random() * 10) + 1; j++){
                list.tasks.push({
                    id: chance.guid(),
                    name: chance.word(),
                    listId: list.id,
                    description: "",
                    whenCreated: new Date(),
                    priority: Priority.low,
                    whoOpened: {},
                    participants: []
                });
            }
            result.push(list);
        }
        return result;
    }
}