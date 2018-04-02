
import { Ng2IzitoastService } from 'ng2-izitoast';
import { MessageService } from './services/message.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Ng2IziToastModule } from 'ng2-izitoast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragulaModule,
    Ng2IziToastModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>{
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps:[HttpClient]
      }
    })
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
