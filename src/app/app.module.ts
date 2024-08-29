import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';

import { StoreModule, ActionReducer, Action } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { Todo } from '../app/todos/todo-page/models/todo.model';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.development';

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer } as { todos: ActionReducer<Todo[], Action<string>> }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
