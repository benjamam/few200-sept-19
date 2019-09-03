import { Component, OnInit } from '@angular/core';
import { TodoListItem } from './models';
import { ListDataService } from './services/list-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  currentId = 2;
  todoList$: Observable<TodoListItem[]>;

  constructor(private service: ListDataService) { }

  ngOnInit() {
    // meaningful work getting the component ready goes here

    this.todoList$ = this.service.getData();
  }

  addTodoItem(what: string) {
    this.service.add(what);
  }
}
