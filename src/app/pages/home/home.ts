import { Component, inject } from '@angular/core';
import { TodoList } from "../../components/todo-list/todo-list";
import { TodoAdd } from "../../components/todo-add/todo-add";
import { Todo, TodoStatus } from '../../models/todo';
import { TodoService } from '../../services/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [TodoList, TodoAdd],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  todoList: Todo[] = [];
  todoService = inject(TodoService);
  private router = inject(Router);

  constructor() { 
    this.todoList = this.todoService.todoList;
  }

  navigateTodo(idTodo: number) {
    this.router.navigate(['/todo/'+idTodo]);
  }

  updateTodo(todo: Todo) {
    console.log(todo);
  }
}
