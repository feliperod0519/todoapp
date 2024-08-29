import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../todo-page/models/todo.model';
import { Form, FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  
  @Input() todo: Todo = new Todo('');
  @ViewChild('myInput') txtInputRef: ElementRef = new ElementRef('');  

  chkCompletado: FormControl = new FormControl();
  txtInput: FormControl = new FormControl();

  editando: boolean = false;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  editar(){
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputRef.nativeElement.select(); //focus
    }, 1);
  }

  terminarEdicion(){
    this.editando = false;
    if (this.txtInput.invalid){
      return;
    }
    if (this.txtInput.value === this.todo.texto){
      return;
    }
    this.store.dispatch(actions.editar({id: this.todo.id, texto: this.txtInput.value}));
  }

  borrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }
}
