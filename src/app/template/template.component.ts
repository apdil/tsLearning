import { Component } from '@angular/core';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html'
})
export class TemplateComponent {
    title = 'app';
    buttShow = false;

    methode() {
        this.title = 'autre chose';
    }

    displayInput() {
        this.buttShow = !this.buttShow;
    }
}

