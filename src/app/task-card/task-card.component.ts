import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
  
})
export class TaskCardComponent {
   @Input() task: Task = {
    id: 0,
    title: ''
  };
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
}
