import { Injectable } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoId = 5;
  statuses = ['Todo', 'Doing', 'Done'];
  todoList: ITodo [] = [
    // example of how to make an item in todo list
    { title: 'Test 01', id: 1, status: 'Todo', description: 'Test Description 01', createdAt: new Date() },
    { title: 'Test 02', id: 2, status: 'Doing', description: 'Test Description 02', createdAt: new Date() },
    { title: 'Disable edit button', id: 3, status: 'Done',
      description: 'Disable the edit button when status is marked "Done"', createdAt: new Date() },
    { title: 'Test 04', id: 4, status: 'Todo', description: 'Test Description 04', createdAt: new Date() },
  ];

  constructor() { }

  getTodos(status?: string) {
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
    if (todo.description === undefined) {
      todo.description = 'N/A';
    }
    todo.id = this.todoId ++;
    this.todoList.push(todo);
  }
}
