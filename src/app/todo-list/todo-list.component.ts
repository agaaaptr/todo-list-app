import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: Date;
  priority: 'low' | 'medium' | 'high';
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoText = '';
  newTodoDueDate?: Date;
  newTodoPriority: 'low' | 'medium' | 'high' = 'medium';
  filter: 'all' | 'active' | 'completed' = 'all';

  addTodo() {
    if (this.newTodoText.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: this.newTodoText.trim(),
        completed: false,
        dueDate: this.newTodoDueDate,
        priority: this.newTodoPriority,
      };
      this.todos.push(newTodo);
      this.newTodoText = '';
      this.newTodoDueDate = undefined;
      this.newTodoPriority = 'medium';
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  get filteredTodos(): Todo[] {
    switch (this.filter) {
      case 'active':
        return this.todos.filter((todo) => !todo.completed);
      case 'completed':
        return this.todos.filter((todo) => todo.completed);
      default:
        return this.todos;
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  get remainingTodos(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }
}
