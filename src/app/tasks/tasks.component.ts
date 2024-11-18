import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) user!: User;

  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }
}
