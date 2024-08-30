import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../todo-page/models/todo.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';
import { FilterTypes } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  
  @ViewChild('toggle') chkCompletado: ElementRef = new ElementRef(''); 
  todos: Todo[] = [];
  currentFilter: FilterTypes = 'all';
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe(todos => this.todos = todos);
    // this.store.select('filter').subscribe(f => {
    //   switch(f){
    //     case 'completed':
    //       this.todos = this.todos.filter(todo => todo.completado);
    //       console.log('completed',this.todos);
    //       break;
    //     case 'pending':
    //       this.todos = this.todos.filter(todo => !todo.completado);
    //       console.log('pending',this.todos);
    //       break;
    //     default:
    //       break;
    //   }
    // });

    // this.store.subscribe(state=>{
    //   this.todos = state.todos;
    //   this.currentFilter = state.filter; 
    // }) //method 1
    this.store.subscribe(({todos,filter})=>{
      this.todos = todos;
      this.currentFilter = filter; 
    })
  }

  toggleAll(){
    //console.log(this.chkCompletado.nativeElement.checked)
    this.store.dispatch(actions.toggleAll( { completado: this.chkCompletado.nativeElement.checked } ));
  }
}
