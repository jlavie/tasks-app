import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { TasksService } from './tasks.service';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) user!: User;

  isAddingTask = false;

  tasks = DUMMY_TASKS;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
