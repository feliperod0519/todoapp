import { createReducer, on } from "@ngrx/store";
import { crear, toggle } from "./todo.actions";
import { Todo } from '../todos/todo-page/models/todo.model';
import { Action } from '@ngrx/store';

export const initialState: Todo[] | null = [ new Todo ('Minou el gato')];

const _todoReducer = createReducer(
    initialState,
    on(crear,(state,props)=>[...state, new Todo (props.texto)]), //no push because it mutates the state
    on(toggle,(state,props)=>{
        return state.map(i=>{ 
            if (i.id == props.id)  
                return {...i, completado: !i.completado} 
            else
                return i;
        });
    })
);

export function todoReducer(state:Todo[], action:Action){
    return _todoReducer(state, action);
}

