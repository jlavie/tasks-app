import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../user/user.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) user!: User;

  @Output() closeDialog = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  constructor(private tasksService: TasksService) {}
  // same as
  // private tasksService = inject(TasksService);

  onCloseDialog() {
    this.closeDialog.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
			title: this.enteredTitle,
			summary: this.enteredSummary,
			date: this.enteredDate
		}, this.user.id);
    this.closeDialog.emit();
  }
}
