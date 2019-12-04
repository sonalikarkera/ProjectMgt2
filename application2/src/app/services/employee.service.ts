import { EmployeeSkill } from 'src/app/models/employeeskills';
import { Projectmember } from '../models/projectmember';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private skilledEmployeeURL: string;
  private managerURL: string;
  private employeeURL: string;
  private results: Observable<Employee[]>;


  constructor(private http: HttpClient) {
    this.managerURL = 'spring-end/employee/getManagersByAvailability';
    this.skilledEmployeeURL = 'spring-end/employeeSkill/getEmployeesBySkills';
    this.employeeURL = 'spring-end/employee/getMembersByAvailability';

  }

  public findAll(){

    return this.http.get<Employee[]>(this.employeeURL);
  }

  public findSkilledEmployee(skill: string): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.skilledEmployeeURL + '/' + skill);
  }

}