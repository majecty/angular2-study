import { Component } from '@angular/core';

@Component({
    selector: 'heros',
    templateUrl: './heros.component.html'
})
export class HerosCompoent {
    heroes = ['a', 'b', 'c'];
    inputValue = ""
    clickText:string = '아직 클릭 안됐어';

    buttonClicked(n:number) {
        this.clickText = n + "클릭함" + Math.random();
    }
}
