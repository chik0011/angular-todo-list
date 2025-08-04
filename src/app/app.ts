import { Component } from '@angular/core';
import { TodoList } from "./components/todo-list/todo-list";
import { Todo, TodoStatus } from './models/todo';

@Component({
  selector: 'app-root',
  imports: [TodoList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  todoList: Todo[] = [];

  constructor() { 
    const todo1 = new Todo();
    todo1.id = 1;
    todo1.label = "Clean the kitchen";
    todo1.donne = TodoStatus.DRAFT;
    this.todoList.push(todo1);

    const todo2 = new Todo();
    todo2.id = 2;
    todo2.label = "Read 20 pages of a book";
    todo2.donne = TodoStatus.DONE;
    this.todoList.push(todo2);
  }
}
