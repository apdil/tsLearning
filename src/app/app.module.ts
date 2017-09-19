import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TemplateComponent } from './template/template.component';

import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    PersonneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
