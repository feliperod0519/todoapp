import { FilterTypes } from "./filter/filter.actions";
import { Todo } from "./todos/todo-page/models/todo.model";

export interface AppState { 
    todos: Todo[];
    filter: FilterTypes
}    
