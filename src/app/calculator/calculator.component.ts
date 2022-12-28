import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.html']
})
export class CalculatorComponent {
    firstName: string = "";
    lastName: string = "";
    idNumber: number = 0;
    jobTitle: string = "";
    annualSalary: number = 0;

    allEmployees: any[] = []

    addNewEmp() {

        let newEmployee = {
            firstName: this.firstName,
            lastName: this.lastName,
            idNumber: this.idNumber,
            jobTitle: this.jobTitle,
            annualSalary: this.annualSalary
        }

        this.allEmployees.push(newEmployee)
        console.log("all employees", this.allEmployees);
        console.log("second employee lastname", this.allEmployees[1].lastName);

        // every time clicked add info to an array and the do an ngfor loop of that array in the html
    }
}
