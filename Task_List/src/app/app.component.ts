import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClient],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  taskTitle: string = '';
  taskDescription: string = '';
  tasks: { id: number; title: string; description: string; completed: boolean }[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks: []) => {
      this.tasks = tasks;
    });
  }

  onSubmit() {
    if (this.taskTitle && this.taskDescription) {
      const newTask = { title: this.taskTitle, description: this.taskDescription, completed: false };

      this.taskService.createTask(newTask).subscribe((task: { id: number; title: string; description: string; completed: boolean; }) => {
        this.tasks.push(task);
        this.taskTitle = '';
        this.taskDescription = '';
      });
    } else {
      alert('Please fill out both fields.');
    }
  }

  markAsCompleted(task: any) {
    this.taskService.updateTask(task.id, { ...task, completed: true }).subscribe(() => {
      task.completed = true;
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }
}
