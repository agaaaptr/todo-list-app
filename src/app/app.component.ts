import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, TodoListComponent],
  template: '<app-todo-list></app-todo-list>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-app';
}
