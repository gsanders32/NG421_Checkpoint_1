import { Injectable } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoId = 0;
  statuses = ['Todo', 'Doing', 'Done'];
  todoList: ITodo [] = [
    // example of how to make an item in todo list
    { title: 'Install Angular CLI', id: this.todoId, status: 'Todo', createdAt: new Date() },
  ];

  constructor() { }

  getTodos(status: string) {
    if (status) {
      return this.todoList.filter(todo => todo.status === status);
    } else {
      return this.todoList;
    }
  }

  getStatuses() {
    return this.statuses;
  }

  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  addTodo(todo: ITodo): void {
    todo.id = this.todoId ++;
    this.todoList.push(todo);
  }
}
