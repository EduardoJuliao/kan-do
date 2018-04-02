import { MessageService } from './services/message.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  title = 'app';
  constructor(translateService: TranslateService){
    translateService.setDefaultLang("pt-BR");
    translateService.use(navigator.language);
     
  }
}
