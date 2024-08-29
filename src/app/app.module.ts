import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';

import { StoreModule, ActionReducer, Action } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { Todo } from '../app/todos/todo-page/models/todo.model';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer } as { todos: ActionReducer<Todo[], Action<string>> })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
