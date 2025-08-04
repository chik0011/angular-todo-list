import { Injectable } from '@angular/core';
import { Todo, TodoStatus } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
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

    const todo3 = new Todo();
    todo3.id = 3;
    todo3.label = "Update the project roadmap";
    todo3.donne = TodoStatus.DONE;
    this.todoList.push(todo3);

    const todo4 = new Todo();
    todo4.id = 3;
    todo4.label = "Call mom";
    todo4.donne = TodoStatus.PROCESS;
    this.todoList.push(todo4);
  }
}
