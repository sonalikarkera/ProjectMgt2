import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitAgreementDetailsService {

  private termsFromGitURL : string;

  constructor(private http: HttpClient) {
    this.termsFromGitURL = 'https://raw.githubusercontent.com/DeepaAnchan/test/master/termsAndCondition.json';
    

  } 

  getTerms(){
   return this.http.get(this.termsFromGitURL);
  }
}