import { Component, inject } from '@angular/core';
import { TodoList } from "./components/todo-list/todo-list";
import { TodoAdd } from "./components/todo-add/todo-add";
import { Todo, TodoStatus } from './models/todo';
import { TodoService } from './services/todo';

@Component({
  selector: 'app-root',
  imports: [TodoList, TodoAdd],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  todoList: Todo[] = [];
  todoService = inject(TodoService)

  constructor() { 
    this.todoList = this.todoService.todoList;
  }
}
