import { TodoListItem } from '../models';
import { BehaviorSubject } from 'rxjs';
export class ListDataService {

  private subject: BehaviorSubject<TodoListItem[]>;
  private currentId = 2;
  data: TodoListItem[] = [
    { id: '1', description: 'Clean Bushes', completed: false }
  ];

  constructor() {
    this.subject = new BehaviorSubject(this.data);
  }

  add(what: string) {
    const newItem: TodoListItem = {
      id: (this.currentId++).toString(),
      description: what,
      completed: false
    };
    this.data = [newItem, ...this.data];
    this.subject.next(this.data);
  }
  getData() {
    return this.subject.asObservable();
  }
}
