import { Component, inject, input, InputSignal, OnChanges, output, SimpleChanges } from '@angular/core';
import { Todo, TodoStatus } from "../../models/todo";
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, NgClass],
  standalone: true,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
  todo: InputSignal<Todo> = input(new Todo);
  TodoStatus = TodoStatus;
  todoButtonClick = output<Todo>();

  todoService = inject(TodoService);

  todoClick(todo: Todo): void {
    this.todo().status ++;

    if (this.todo().status > this.TodoStatus.DONE) {
      this.todo().status = this.TodoStatus.DRAFT;
    }
    
    this.todoButtonClick.emit(todo);
  }

  deleteTodo() {
    if (this.todo().id) {
      this.todoService.delete(this.todo().id);
    }
  }
}
