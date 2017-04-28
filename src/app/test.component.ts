import { Component, OnInit  } from '@angular/core';
import {Observable} from 'rxjs/Observable';

const dragonEventsConst = [
  { type: 'attack', value: 12, target: 'player-dorkman'},
  { type: 'yawn', value: 40, target: 'none'},
  { type: 'eat',  value: -1, target: 'horse'},
  { type: 'attack', value: 23, target: 'player-scott'},
  { type: 'attack', value: 12, target: 'player-dorkman'}
];

const dragonResult = dragonEventsConst
  .filter(event => event.type === 'attack')
  .filter(event => event.target === 'player-dorkman')
  .map(event => event.value)
  .reduce((prev, value) => (prev || 0) + value);


@Component({
  selector: 'app-my-test',
  templateUrl: './test.component.html'
})


export class TestComponent  implements OnInit {
  dragonEvents = dragonEventsConst;
  title = '';
  result = JSON.stringify(dragonResult);
 // source = undefined;

  ngOnInit(): void {
    this.dragonEvents = dragonEventsConst;
    this.title = 'My Title';

    const source = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('observable timeout message');
      }, 2000);
      console.log('observable started');
    });

   // this.source.forEach(x => console.log(x));
    source.subscribe(value => console.log(value));
  }

  getDragonEventsStr() {
    return JSON.stringify(this.dragonEvents);
  }

  testClick() {
    console.log('Clicked');
  }

  onkey(value: string) {
    console.log('keyup:' + value);
}


  testInput() {
    console.log('value');
  }



  /*
  testInput(value) {
    console.log('value=' + value);
  }

  testInput(value: string): void {
    console.log('value=' + value);
  }
*/
}
