import { createReducer, on } from "@ngrx/store";
import { crear } from "./todo.actions";
import { Todo } from '../todos/todo-page/models/todo.model';
import { Action } from '@ngrx/store';

export const initialState: Todo[] | null = [];

const _todoReducer = createReducer(
    initialState,
    on(crear,(state,props)=>[...state, new Todo (props.texto)]) //no push because it mutates the state
);

export function todoReducer(state:Todo[], action:Action){
    return _todoReducer(state, action);
}

