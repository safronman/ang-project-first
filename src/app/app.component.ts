import { Component, OnInit } from '@angular/core';
import { Man } from 'ang-project-test/src/man';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private man: Man) {
    }

    title = 'ang-project-first';
    name = null;

    ngOnInit() {
        debugger;
        this.name = this.man.getName();
        console.log(this.name);
    }
}
