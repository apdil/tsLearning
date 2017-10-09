import { Routes } from '@angular/router';
import { BoucleComponent } from './boucle/boucle.component';
import { TemplateComponent } from './template/template.component';
import { PersonneComponent } from './personne/personne.component';

export const  appRoutes: Routes = [
    {
        path: 'boucle', component: BoucleComponent
    },
    {
        path: 'template', component: TemplateComponent
    },
    {
        path: 'personne', component: PersonneComponent
    }
];
