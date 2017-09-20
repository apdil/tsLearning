import {Component} from '@angular/core' ;

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'add-boucle',
    templateUrl: './boucle.component.html'
})

export class BoucleComponent {
    tableau: string[] = ['pomme', 'fraise', 'poire'];

}
