import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  employeeList: any[] = [
 {
   EmployeeId : 165893,
   EmployeeName : 'Vikas',
   EmployeeDesignation : 'S.Software Engineer',
   DateOfJoining : new Date('Wed Mar 02 2015 08:48:23'),
   EmployeeAddress : 'Electronic City, Bangalore',
   EmployeePhone : 9030344566,
   EmployeeAge : 23,
   Salary : 20000,
   City : 'Bangalore',
   CompanyName : 'TCS'
 },
 {
   EmployeeId : 1045896,
   EmployeeName : 'Vivek',
   EmployeeDesignation : 'Delivery Manager',
   DateOfJoining : new Date('Wed Mar 02 2015 08:48:23'),
   EmployeeAddress : 'Madhapur, Hyderabad',
   EmployeePhone : 9030344566,
   EmployeeAge : 23,
   Salary : 20000,
   City : 'Hyderabad',
   CompanyName : 'Microsoft'
 }
];
  constructor() { }

  ngOnInit() {
  }

}
