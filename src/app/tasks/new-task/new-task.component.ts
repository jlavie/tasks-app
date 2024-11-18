import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<void>();

  onCloseDialog() {
    this.closeDialog.emit();
  }
}
