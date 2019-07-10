import { Component, OnInit } from '@angular/core';
import { Man } from 'ang-project-test/src/man';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private man: Man
    ) {
    }

    title = 'ang-project-first';

    ngOnInit() {
        debugger
        const b = this.man.getName();
        console.log(b);
    }
}
