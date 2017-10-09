import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TemplateComponent } from './template/template.component';

import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { BoucleComponent } from './boucle/boucle.component';
import { TodolistComponent } from './todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    PersonneComponent,
    BoucleComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
