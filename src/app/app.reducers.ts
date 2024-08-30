
import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducer';
import { Todo } from './todos/todo-page/models/todo.model';

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer as ActionReducer<Todo[], Action<string>>,
    filter: filterReducer
}