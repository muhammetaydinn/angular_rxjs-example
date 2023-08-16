import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  constructor() {}

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  public addTask(task: Task): void {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  public removeTask(taskId: number): void { // Ensure 'public' visibility here
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.tasksSubject.next(this.tasks);
  }

  // ... rest of the code ...
}
