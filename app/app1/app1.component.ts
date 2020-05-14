import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  employeeList: any[] = [
    {
  EmployeeId : 103621,
  EmployeeName : 'Khaja Moizuddin',
  EmployeeDesignation : 'Software Engineer',
  DateOfJoining : new Date('Mon Apr 22 2016 10:30:57'),
  EmployeeAddress : 'Gacchibowli, Hyderabad',
  EmployeePhone : 8019804474,
  EmployeeAge : 29,
  Salary : 10000,
  City : 'Hyderabad',
  CompanyName : 'Legato'
 },
 {
   EmployeeId : 103622,
   EmployeeName : 'Pavan Kumar',
   EmployeeDesignation : 'S.Software Engineer',
   DateOfJoining : new Date('Tue Jul 19 2012 09:27:45'),
   EmployeeAddress : 'DLF City, Bangalore',
   EmployeePhone : 9030344566,
   EmployeeAge : 25,
   Salary : 15000,
   City : 'Bangalore',
   CompanyName : 'Infosys'
 }
];
  constructor() { }

  ngOnInit() {
  }

}
