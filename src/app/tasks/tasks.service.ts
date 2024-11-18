import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { NewTaskData } from './new-task/new-task.model';

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = DUMMY_TASKS

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
          });
    }
}