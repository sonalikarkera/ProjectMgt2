import { Observable } from 'rxjs';
import { Task } from './../models/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl:string;
  private taskURL2:string;
  private saveTaskURL: string;
  constructor(private http: HttpClient) {
    this.taskUrl='http://172.18.8.211:8050/web-app/getTasksById";';
    this.taskURL2 = 'spring-end/task/TaskByProjectId';
    this.saveTaskURL = 'spring-end/task/Task';

   }

  public getTaskById(id: number): Observable<Task[]> {
    const url = `${this. taskUrl}/${id}`;
    console.log(url);
    return this.http.get<Task[]>(url);
    }

    

  public findTask(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskURL2+'/'+ projectId);
  }

  public save(task: Task) {    
    return this.http.post<Task>(this.saveTaskURL, task);
  }


  

}