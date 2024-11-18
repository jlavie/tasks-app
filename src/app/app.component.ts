import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from '../data/dummy-users';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tasks-app';
  selectedUserId?: string;

  users = DUMMY_USERS;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
