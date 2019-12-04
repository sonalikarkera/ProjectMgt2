import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import {Observable} from "rxjs/index";
import {ApiResponse} from "../models/apiresponse";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, public router :Router) { }
 
  public handleError(error) {
    let errorMessage = '';
    let errorStatus=0;
    if (error.error instanceof ErrorEvent) {
      // client-side error
     // this.router.navigate(['errorpage']);
      errorMessage = `Error: Client Side Error`;
      errorStatus=400;
    } else {
      // server-side error
     // this.router.navigate(['errorpage']);
      errorMessage = `Error Code: Server Side Error `;
      errorStatus=400;
    }
    console.log(errorMessage);
return throwError(errorMessage);
  }

  login(loginPayload) : Observable<ApiResponse> {
   return this.http.post<ApiResponse>('http://localhost:7990/' + 'token/generate-token', loginPayload).pipe(
    retry(1),
    catchError(this.handleError)
  );





  
// return this.http.post<ApiResponse>('http://localhost:8050/login-service/token/generate-token', loginPayload);
  }
  private mailingUrl: string;


 public sendMail(user)
{
    return this.http.post('http://localhost:7990/token/send-email', user);
  }
}