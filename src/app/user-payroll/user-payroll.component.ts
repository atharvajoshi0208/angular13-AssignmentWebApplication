import { Component,Input, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { UserPayrollApiService } from '../user-payroll-api.service';

@Component({
  selector: 'app-user-payroll',
  templateUrl: './user-payroll.component.html',
  styleUrls: ['./user-payroll.component.css']
})
export class UserPayrollComponent implements OnInit {
  userList$!:Observable<any[]>;
  constructor(private service:UserPayrollApiService) { }

  //variables
activeAddUserPayroll:boolean = false;
userPayroll:any;
modelTitle:string = "";

ModelAddUserPayroll()
{
  this.modelTitle = "Add User Payroll";
  this.activeAddUserPayroll = true;
  this.userPayroll={
    id:0,
    userName:null,
    email:null,
    date:null,
    payload:null
  }
}
modelClose(){
  this.userList$ = this.service.getUserList();
}

  ngOnInit(): void {
    this.userList$ = this.service.getUserList();
    this.userPayroll={
      id:0,
      userName:null,
      email:null,
      date:null,
      payload:null
    }
  }


}
