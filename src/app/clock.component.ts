import { Component } from '@angular/core';

@Component({
    selector: 'clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent {
    hour = 15;
    minuate = 30;
    second = 17;

    constructor() {
        setInterval(() => {
            this.second += 1;
        }, 1000)
    }
}
