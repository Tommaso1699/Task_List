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
  title: string = ''; //property of class, type string
  description: string = ''; //property of class, type string
  tasks: { title: string; description: string; done: boolean }[] = []; //property of class, array of objects with 3 fields of type string, string and bool 

  onSubmit() { // function that describes what happen, when user press button submit task - if all fields contain text, task is added to array, if one of two fields doesn't contain anything, nothing happens
    if (this.title && this.description) { //checking condition
      this.tasks.push({ //adding task to array
        title: this.title,
        description: this.description,
        done: false
      });
      this.title = ''; //clearing property
      this.description = ''; //clearing property
    }
  }

  TaskDone(index: number) { // function to mark task as compleated
    this.tasks[index].done = true;
  }

  DeleteTask(index: number) { // function to delete task from list
    this.tasks.splice(index, 1);
  }
}
