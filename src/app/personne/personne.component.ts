import {Component} from '@angular/core';

@Component({
    selector: 'app-personne',
    templateUrl: './personne.component.html'
})

export class PersonneComponent {
    nom:  string;
    prenom: string;
    age: number;

    consolePersone() {
        console.log(this);
    }
}