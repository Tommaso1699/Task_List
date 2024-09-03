import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task_List';
  taskTitle: string = '';
  taskDescription: string = '';
  tasks: { title: string; description: string; done: boolean }[] = [];

  onSubmit() {
    if (this.taskTitle && this.taskDescription) {
      this.tasks.push({
        title: this.taskTitle,
        description: this.taskDescription,
        done: false
      });
      this.taskTitle = '';
      this.taskDescription = '';
    } else {
      alert('Please fill out both fields.');
    }
  }

  markAsDone(index: number) {
    this.tasks[index].done = true;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
