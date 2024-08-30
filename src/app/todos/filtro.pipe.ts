import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo-page/models/todo.model';
import { FilterTypes } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filter: FilterTypes): Todo[] {
    switch(filter){
      case 'completed':
        return todos.filter(todo => todo.completado);
      case 'pending':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
