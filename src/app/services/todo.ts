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
    todo1.status = TodoStatus.DRAFT;
    this.todoList.push(todo1);

    const todo2 = new Todo();
    todo2.id = 2;
    todo2.label = "Read 20 pages of a book";
    todo2.status = TodoStatus.DONE;
    this.todoList.push(todo2);

    const todo3 = new Todo();
    todo3.id = 3;
    todo3.label = "Update the project roadmap";
    todo3.status = TodoStatus.DONE;
    this.todoList.push(todo3);

    const todo4 = new Todo();
    todo4.id = 3;
    todo4.label = "Call mom";
    todo4.status = TodoStatus.PROCESS;
    this.todoList.push(todo4);
  }

  add(label: string): void {
    let nextTodoId = this.todoList.length > 0
      ? this.todoList.reduce((prev, current) => (current.id > prev.id ? current : prev)).id + 1
      : 1;

    const todo = new Todo();
    todo.id = nextTodoId;
    todo.label = label;
    todo.status = TodoStatus.DRAFT;

    this.todoList.push(todo);
  }

  delete(idTodo: number) {
    const index = this.todoList.findIndex(({ id }) => id == idTodo);
    
    if (index !== -1) {
      this.todoList.splice(index, 1);
    } else {
      console.warn(`Todo with ID ${idTodo} not found.`);
    }
  }
}
