import { ITask } from './../models/ITask';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-task',
    templateUrl: 'Task.component.html',
    styleUrls: ['task.component.css']
})

export class TaskComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Input("task") task: ITask;

    private getColorPriority(): string {
        switch (this.task.priority) {
            case 1: return "#1aff1a";
            case 2: return "#ffcc00";
            case 3: return "#ff0000";
            default: return "#bbb";
        }
    }
}