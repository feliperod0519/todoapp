import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { FilterTypes, setFilter } from '../../filter/filter.actions';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit {

  currentFilter: FilterTypes = 'all';
  filters: FilterTypes[] = ['all', 'completed', 'pending'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.currentFilter = state.filter;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  changeFilter(filter: FilterTypes){
    this.currentFilter = filter;
    this.store.dispatch(setFilter(this.currentFilter))

  }

  deleteCompleted(){
    this.store.dispatch(actions.deleteCompleted());
  }
}
