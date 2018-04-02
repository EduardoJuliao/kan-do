import { TaskService } from './services/task.service';
import { MessageService } from './services/message.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  
})
export class AppComponent {
   
  constructor(translateService: TranslateService,
  taskservice: TaskService){
    translateService.setDefaultLang("pt-BR");
    translateService.use(navigator.language);  

    let tasks = taskservice.getMyTaskList();
    console.log(tasks);
  }
}
