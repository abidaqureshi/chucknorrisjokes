import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {NgRedux} from '@angular-redux/store';
import { AppState } from '../app.state';


@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})

export class JokesComponent implements OnInit {

  @Input() showLoader = false;

  jokesArray: Array<object> = [];
  favoriteJokesArray: Array<object> = [];
  constructor( private ngRedux: NgRedux<AppState>) {
    ngRedux.subscribe(() => {
       const data = ngRedux.getState();
       this.jokesArray.length = 0;
       this.jokesArray.push(data.key.joke);
       this.favoriteJokesArray = data.favoriteJokes;
       this.showLoader = false;
    });
  }

  removeJoke ( itemId: string ) {

      const myFavorties:Array<object> = this.favoriteJokesArray.filter((item:any)=>item.id !== itemId )
      console.log('the string id ', itemId)
      console.log('the favorites are ', myFavorties)
      this.ngRedux.dispatch({
        type: 'REMOVE_JOKE',
        payload: {favoriteJokes: myFavorties}
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('container data ', event.container.data);
      this.ngRedux.dispatch({
        type: 'ADD_JOKE',
        payload: {favoriteJokes: event.container.data}
      });
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit() {
  }

}
