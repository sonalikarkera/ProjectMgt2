
import { Component, OnInit } from '@angular/core';

import { TnCServiceService } from 'src/app/services/tn-cservice.service';
import { Employee } from 'src/app/models/employee';



import { GitAgreementDetailsService } from 'src/app/services/git-agreement-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agreedoc',
  templateUrl: './agreedoc.component.html',
  styleUrls: ['./agreedoc.component.css']
})
export class AgreedocComponent implements OnInit {

  title = 'eulAgg';

  disabled = false;
  hide = true;

  terms : any;

  employee : Employee;

  constructor(private termsService: TnCServiceService, private router: Router, private gitTerms: GitAgreementDetailsService){

  }

  ngOnInit(){
    let employee111 : number = Number(sessionStorage.getItem('eid'));
     this.getEmployee(employee111); 
/*
     this.gitTerms.getTerms().subscribe(response => {
       for(let key in response){
          if(response.hasOwnProperty(key)) {
            this.terms = response[key];
          }
       }
     })
     */
     //this.terms= "terms and condition para";

     
  }


  getEmployee(employeeId: number){
    this.termsService.findById(employeeId).subscribe(
      response => {
        
        this.employee = response;

        console.log(response);

        if(this.employee.eulAgreement === true){

          //DETERMINE THE USERTYPE
          if(this.employee.userType === "MANAGER"){
            this.router.navigate(['manager']);

          }
          else if(this.employee.userType === "MEMBER"){
            this.router.navigate(['employee']);

          }
    
        }
        else{
          this.hide= false;
          this.router.navigate(['agreedoc']);

        }
      }
  
    );
  }

  Submit(){

    console.log("CHECKED!!")
    console.log('BEFORE'+this.employee.eulAgreement);
    this.termsService.updateEulValue(this.employee).subscribe(response2 => {
      this.employee = response2;
      console.log('AFTER'+this.employee.eulAgreement);

    });
    //DETERMINE THE USERTYPE
    if(this.employee.userType === "MANAGER"){
      this.router.navigate(['manager']);

    }
    else if(this.employee.userType === "MEMBER"){
      this.router.navigate(['employee']);

    }

  }

}