import { Component } from '@angular/core';
declare var moment: any;

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
        var date = moment();
        this.hour = date.hour();
        this.minuate = date.minute();
        this.second = date.second();
    }

    chooseCountry(country:string) {
        this.country = country;
    }
}
