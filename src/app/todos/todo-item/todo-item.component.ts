import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../todo-page/models/todo.model';
import { Form, FormControl, Validators } from '@angular/forms';

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

  editando: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
  }

  editar(){
    this.editando = true;
    setTimeout(() => {
      this.txtInputRef.nativeElement.select(); //focus
    }, 10);
  }

  terminarEdicion(){
    this.editando = false;
  }
}
