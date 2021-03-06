import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthInterceptor } from './_helpers/auth.interceptor'
import { ErrorInterceptor } from './_helpers/error.interceptor'
import { fakeBackendProvider } from './_helpers/fake-backend'

import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { NavbarAdminComponent } from './navigation/navbar-admin/navbar-admin.component';
import { NavbarEmployeeComponent } from './navigation/navbar-employee/navbar-employee.component';
import { HomeComponent } from './home/home.component';
import { NavbarOutComponent } from './navigation/navbar-out/navbar-out.component';
import { EmployeesComponent } from './tables/employees/employees.component';
import { JobsComponent } from './tables/jobs/jobs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditEmployeeComponent } from './edit-windows/edit-employee/edit-employee.component';
import { EditJobComponent } from './edit-windows/edit-job/edit-job.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginEmployeeComponent } from './login/login-employee/login-employee.component';
import { WelcomeAdminComponent } from './home/welcome-admin/welcome-admin.component';
import { WelcomeEmployeeComponent } from './home/welcome-employee/welcome-employee.component';
import { WeekPayrollComponent } from './tables/week-payroll/week-payroll.component';
import { MonthPayrollComponent } from './tables/month-payroll/month-payroll.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    NavbarAdminComponent,
    HomeComponent,
    NavbarOutComponent,
    EmployeesComponent,
    JobsComponent,
    EditEmployeeComponent,
    EditJobComponent,
    LoginEmployeeComponent,
    NavbarEmployeeComponent,
    WelcomeAdminComponent,
    WelcomeEmployeeComponent,
    WeekPayrollComponent,
    MonthPayrollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatMenuModule,
    MatListModule
  ],
  entryComponents: [
    EditEmployeeComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


    //fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
