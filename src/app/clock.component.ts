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
    countries = [ "한국", "일본" ];
    country = "한국";

    constructor() {
        this.updateDate();
        setInterval(() => {
            this.updateDate();
        }, 1000)
    }

    updateDate() {
        var date = new Date();
        this.hour = date.getHours();
        this.minuate = date.getMinutes();
        this.second = date.getSeconds();
    }

    chooseCountry(country:string) {
        this.country = country;
    }
}
