import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.css']
})
export class App3Component implements OnInit {

  employeeList: any[] = [
    {
      EmployeeId : 165846,
      EmployeeName : 'Ramesh',
      EmployeeDesignation : 'S.Software Engineer',
      DateOfJoining : new Date('Wed Jul 20 2017 09:24:23'),
      EmployeeAddress : 'Banjara Hills, Bangalore',
      EmployeePhone : 8097984465,
      EmployeeAge : 27,
      Salary : 25000,
      City : 'Hyderabad',
      CompanyName : 'Accenture'
    },
    {
      EmployeeId : 1087564,
      EmployeeName : 'Ashish',
      EmployeeDesignation : 'Delivery Manager',
      DateOfJoining : new Date('Wed Aug 10 2012 11:02:23'),
      EmployeeAddress : 'Mehdipatnam, Hyderabad',
      EmployeePhone : 9030344566,
      EmployeeAge : 26,
      Salary : 20000,
      City : 'Hyderabad',
      CompanyName : 'Microsoft'
    }];

  constructor() { }

  ngOnInit() {
  }

}
