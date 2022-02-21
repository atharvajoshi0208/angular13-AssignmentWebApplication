import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserPayrollComponent } from './user-payroll/user-payroll.component';
import { AddUserPayrollComponent } from './UserPayroll/add-user-payroll/add-user-payroll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPayrollApiService } from './user-payroll-api.service';
@NgModule({
  declarations: [
    AppComponent,
    UserPayrollComponent,
    AddUserPayrollComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserPayrollApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
