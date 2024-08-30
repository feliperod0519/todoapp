import { createReducer, on } from "@ngrx/store";
import { crear, toggle, editar, borrar, toggleAll, deleteCompleted } from "./todo.actions";
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
    }),
    on(editar,(state,props)=>{
        return state.map(i=>{ 
            if (i.id == props.id)  
                return {...i, texto: props.texto}    
            else
                return i;
        });
    }),
    on(borrar,(state,props)=>{
        return state.filter(i=>i.id !== props.id);
    }),
    on(toggleAll,(state,props)=>{
        return state.map(i=>{ 
            return {...i, completado: props.completado}    
        });
    }),
    on(deleteCompleted,(state)=>{
        console.log('deleteComplete',state);
        return state.filter(i=>!i.completado);
    })
);

export function todoReducer(state:Todo[], action:Action){
    return _todoReducer(state, action);
}

