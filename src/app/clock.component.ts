import { Component } from '@angular/core';
declare var moment: any;
import _ from "lodash";

@Component({
    selector: 'clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent {
    hour = 15;
    minuate = 30;
    second = 17;
    country = "서울";

    countryOffset = {
        "서울": 9,
        "도쿄": 9,
        "런던": 1,
        "뉴욕": -4
    };

    countries = _.keys(this.countryOffset);

    constructor() {
        this.updateDate();
        setInterval(() => {
            this.updateDate();
        }, 100)
    }

    updateDate() {
        var date = moment().utcOffset(this.countryOffset[this.country]);
        this.hour = date.hour();
        this.minuate = date.minute();
        this.second = date.second();
    }

    chooseCountry(country:string) {
        this.country = country;
    }
}
