import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}

  // Retrieve all tasks
  getTasks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Create a new task
  createTask(task: { title: string; description: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      title: task.title,
      description: task.description,
      completed: false
    });
  }

  // Update a task
  updateTask(id: number, updates: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, updates);
  }

  // Delete a task
  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
