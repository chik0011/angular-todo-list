import { Component, input, InputSignal } from '@angular/core';
import { Todo, TodoStatus } from "../../models/todo";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
  todo: InputSignal<Todo> = input(new Todo);
  TodoStatus = TodoStatus;
}
