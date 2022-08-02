import { Injectable } from '@angular/core';
import { Task } from '../TASK';
import { TASKS } from '../mock-tasks';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }
  getTasks():Observable<Task[]>{
    const tasksObservable = of(TASKS);
    return tasksObservable;
  }
}
