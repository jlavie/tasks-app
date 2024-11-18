import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../data/dummy-tasks';

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = DUMMY_TASKS

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

}