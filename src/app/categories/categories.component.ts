import { Component, OnInit } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import { AppState } from '../app.state';
import { DataService } from '../data.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: string[];
  showLoader = false;
  categoryLoader = false;
  constructor(private data: DataService, private ngRedux: NgRedux<AppState>) {

  }

  loadSubItems( e ) {

    const selectedCategory: string = e.value;
    this.showLoader = true;
    this.data.fetchJokesByCategory(selectedCategory).subscribe((data: object) => {
        this.ngRedux.dispatch({
          type: 'LOAD_JOKE',
          payload: {key: {joke: data}}
        });
    });
  }
  ngOnInit() {
    this.categoryLoader = true;
    this.data.fetchCategories().subscribe((data: string[]) => {
      this.categories = data;
      this.categoryLoader = false;
    });
  }

}
