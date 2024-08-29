import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../todo-page/models/todo.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  
  @ViewChild('toggle') chkCompletado: ElementRef = new ElementRef(''); 
  todos: Todo[] = [];
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todos').subscribe(todos => this.todos = todos);
  }

  toggleAll(){
    //console.log(this.chkCompletado.nativeElement.checked)
    this.store.dispatch(actions.toggleAll( { completado: this.chkCompletado.nativeElement.checked } ));
  }
}
