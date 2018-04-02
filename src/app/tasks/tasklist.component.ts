import { TaskService } from './../services/task.service';
import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ITaskList } from '../models/ITaskList';

@Component({
    selector: 'app-task-list',
    templateUrl: 'tasklist.component.html',
    styleUrls: ['tasklist.component.css']
})

export class TaskListComponent implements OnInit {
    taskLists: ITaskList[];
    
    constructor(tService: TaskService,
    dService: DragulaService) { 
        this.taskLists = tService.getMyTaskList();
       
    }

    ngOnInit() { 

    }
}