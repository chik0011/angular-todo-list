import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.scss'
})
export class TodoAdd {
  label: string | null = null;
  todoService = inject(TodoService);

  addTodo() {
    if (this.label) {
      this.todoService.add(this.label);
      this.label = null;
    }
  }
}
