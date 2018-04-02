import { TaskListModel } from './../models/tasklist.model';
import { TaskService } from './../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: 'tasklist.component.html',
    styleUrls: ['tasklist.component.css']
})

export class TaskListComponent implements OnInit {
    taskLists: TaskListModel[];
    
    constructor(tService: TaskService) { 
        this.taskLists = tService.getMyTaskList();
    }

    ngOnInit() { 

    }
}