import { TaskListModel } from './../models/tasklist.model';
import { Injectable } from '@angular/core'; 
import { Chance } from "chance";

@Injectable()
export class TaskService {

    constructor() { }

    public getMyTaskList(): TaskListModel[]{
        let result: TaskListModel[] = [];
        let chance = new Chance();
        //list
        for(let i = 0; i < Math.floor(Math.random() * 10) + 1; i++){
            let list : TaskListModel = {
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
                    listId: list.id
                });
            }
            result.push(list);
        }
        return result;
    }
}