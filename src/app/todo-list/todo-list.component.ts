import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'todo-list',
    templateUrl: './todo-list.component.html'
})

export class TodolistComponent {
    posts: object[] = [];
    post: object = {};

    display() {
        this.posts.push(Object.assign({}, this.post));
    }

    removePost(index: number) {
        this.posts.splice(index, 1);
    }
}
