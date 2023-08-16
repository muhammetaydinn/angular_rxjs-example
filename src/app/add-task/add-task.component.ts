import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTaskTitle = '';

  constructor(private taskService: TaskService) {}

addTask(): void {
  if (this.newTaskTitle.trim()) {
    const newTask: Task = {
      id: Date.now(),
      title: this.newTaskTitle
    };
    this.taskService.addTask(newTask);
    this.newTaskTitle = ''; // Clear the input field
  }
}

}
