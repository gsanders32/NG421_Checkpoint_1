import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-edit-description-modal',
  templateUrl: './edit-description-modal.component.html',
  styleUrls: ['./edit-description-modal.component.css']
})
export class EditDescriptionModalComponent implements OnInit {

  modalInstance: NgbModalRef;
  todo: ITodo;
  description: string;

  constructor() { }

  ngOnInit() {
    this.description = this.todo.description;
  }

  close() {
    this.modalInstance.close(this.todo.description);
  }

  yes() {
    this.modalInstance.close(this.description);
  }

}
