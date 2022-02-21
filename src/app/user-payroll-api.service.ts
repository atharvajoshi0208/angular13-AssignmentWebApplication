import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPayrollApiService {
  readonly UserPayrollAPIUrl = "https://localhost:7043/api";
  constructor(private http:HttpClient) { }

  getUserList():Observable<any[]>{
    var a = this.http.get<any>(this.UserPayrollAPIUrl + '/Users');
    return a;
  }

  addUserPayroll(data:any){
    return this.http.post(this.UserPayrollAPIUrl + '/Users',data);
  }
}
