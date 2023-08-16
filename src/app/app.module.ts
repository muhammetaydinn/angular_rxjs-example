import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCardComponent } from './task-card/task-card.component'; // Import the component
import { TaskService } from './task.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [AppComponent, AddTaskComponent, TaskListComponent, TaskCardComponent], // Include TaskCardComponent
  imports: [BrowserModule, FormsModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
