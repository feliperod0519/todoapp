import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-page/models/todo.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  
  todos: Todo[] = [];
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todos').subscribe(todos => this.todos = todos);
  }
}
