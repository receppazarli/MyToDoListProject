import {Injectable, OnInit} from '@angular/core';
import {Todo, TodoModule} from "../models/todo/todo.module";

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit{

  todos: Todo[] = [];
  constructor() {

  }

   getTodos():Todo[]{
    return this.todos
  }

  addTodo(todo: Todo):void {
    this.todos.push(todo);
  }

  deleteTodo(id: number) :void {
    this.todos=this.todos.filter(x =>x.id !== id);
  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
