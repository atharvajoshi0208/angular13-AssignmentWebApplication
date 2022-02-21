import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPayrollApiService } from 'src/app/user-payroll-api.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-add-user-payroll',
  templateUrl: './add-user-payroll.component.html',
  styleUrls: ['./add-user-payroll.component.css']
})
export class AddUserPayrollComponent implements OnInit {

  userPayrollList$!: Observable<any[]>;
  constructor(private service:UserPayrollApiService) { }

  
  @Input() userPayroll:any;
  id: number=0;
  userName: string = "";
  email:string = "";
  payload:string = "";

  ngOnInit(): void {
    if(this.id == undefined)
    {
      this.id = 0
    }
    this.id = this.userPayroll.id;
    this.userName = this.userPayroll.userName;
    this.email = this.userPayroll.email;
    this.payload = this.userPayroll.payload;
  }

  AddPayroll(){
    var userPayroll = {
      id:this.id,
      username:this.userName,
      email:this.email,
      payload:this.payload
    }
    this.service.addUserPayroll(userPayroll).subscribe(res => {
      var closebtn = document.getElementById('closemodelbtn');
      if(closebtn) {
        closebtn.click();
      }

     var success = document.getElementById('successalert');
     if(success){
       success.style.display = "block";
      }
     setTimeout(() => {
       if(success){
        success.style.display = "none"
       }
      }, 4000);
    })
  }


}
