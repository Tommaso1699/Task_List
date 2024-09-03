import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // Import FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskTitle: string = '';
  taskDescription: string = '';
  tasks: { title: string, description: string }[] = [];

  onSubmit() {
    if (this.taskTitle && this.taskDescription) {
      this.tasks.push({
        title: this.taskTitle,
        description: this.taskDescription
      });
      this.taskTitle = '';
      this.taskDescription = '';
    } else {
      alert('Please fill out both fields.');
    }
  }
}
