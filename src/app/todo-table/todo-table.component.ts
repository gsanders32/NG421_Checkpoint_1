import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {

  @Input()todoTableData: ITodo;


  constructor(private todoService: TodoService) { }

  displayedColumns: string[] = ['id', 'title', 'status', 'description', 'createdAt'];
  dataSource = new MatTableDataSource(this.todoService.getTodos());

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
