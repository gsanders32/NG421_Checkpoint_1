import { Component, OnInit,Input } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { EditDescriptionModalComponent } from '../edit-description-modal/edit-description-modal.component';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()todo: ITodo;
  isEditing = false;
  todoTitle = '';
  todoStyle;

  constructor(private todoService: TodoService, private modalService: NgbModal) { }

  ngOnInit() {
    this.todoStyle = {
      color: this.todo.status === 'Doing' ? 'Blue' : this.todo.status === 'Done' ? 'Green' : 'Red',
      'text-decoration': this.todo.status === 'Done' ? 'line-through' : 'normal'
    };
  }

  getStatuses() {
    return this.todoService.getStatuses();
  }

  async deleteTodo(todo: ITodo) {
    let result;
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      if (result === 'yes') {
        this.todoService.deleteTodo(todo);
      }
    } catch (ex) {
      console.log(ex);
    }
  }

  async editTodo(todo: ITodo) {
    let result;
    const modal = this.modalService.open(EditDescriptionModalComponent);
    modal.componentInstance.modalInstance = modal;
    modal.componentInstance.todo = todo;
    try {
      result = await modal.result;
      this.todo.description = result;
    } catch (ex) {
      console.log(ex);
    }
  }
}
