import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-calc',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    firstName: string = "";
    lastName: string = "";
    idNumber: number = 0;
    jobTitle: string = "";
    annualSalary: number = 0;
    totalMonthlyCost: number = 0;

    allEmployees: any[] = []

    addNewEmp() {

        
        let newEmployee = {
            firstName: this.firstName,
            lastName: this.lastName,
            idNumber: this.idNumber,
            jobTitle: this.jobTitle,
            annualSalary: this.annualSalary
        };

        this.allEmployees.push(newEmployee);

        let totalDisplay = this.totalMonthlyCost += (newEmployee.annualSalary / 12);
        totalDisplay.toFixed(2);
        this.totalMonthlyCost = totalDisplay;

        this.firstName = "";
        this.lastName = "";
        this.idNumber = 0;
        this.jobTitle = "";
        this.annualSalary = 0;

        // if (this.totalMonthlyCost > 20000) {
        //     this.ngClass = {'overBudget': true}
        // }

        console.log("all employees", this.allEmployees);

    }
}
