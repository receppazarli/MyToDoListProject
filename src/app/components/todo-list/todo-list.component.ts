import { Component } from '@angular/core';
import {Todo, TodoModule} from "../../models/todo/todo.module";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos!: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(title: string): void {
    const id = this.todos.length + 1;
    this.todoService.addTodo(new Todo(id, title));
    this.todos = this.todoService.getTodos(); // Listeyi güncelleme
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }

}
