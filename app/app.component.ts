import { Component } from '@angular/core';

@Component({
  //selector: 'app-root',
  //selector: '.app-root',
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  EmployeeId = 1702356;
  FirstName = 'Khaja';
  LastName = 'Moizuddin';
  EmployeeName: string = this.FirstName + this.LastName;
  EmployeeDesignation = 'Software Engineer';
  DateOfJoining: Date = new Date('Mon Apr 22 2016 07:44:57');
  EmployeeAddress = 'Malakpet, Hyderabad';
  EmployeePhone = 8019804474;
  EmployeeAge = 29;
  Salary  = 20000;
  City = 'Hyderabad';
  CompanyName = 'Legato Health Technologies';
}
