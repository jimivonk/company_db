'use strict';

// import * as React from 'react';
// import './style.css';
const todaysDate = new Date(2022, 9, 12)

const employee1 = {
    firstName: "Paul",
    lastName: "Daniels",
    DoB: "12/6/1958",
    age: 64,
    
     


    fullNameMerger: function() {
        return this.firstName + " " + this.lastName
        
    },

    retirementYear: function () {
        const result = (this.age + 3) >= 65 ? true : false;
        return result
    },

    getSummary: function() {
        return `${this.fullName} is a ${this.age}- year old`
    }
};

const employee2 = {
    firstName: "Reo",
    lastName: "Hatate",
    DoB: "12/06/1998",
    age: 24,
} 

const employee3 = {
    firstName: "Jessica",
    lastName: "Rabbit",
    DoB: "12/06/1978",
    age: 44,
} 
     
const employee4 = {
    firstName: "Joe",
    lastName: "Hart",
    DoB: "12/06/1988",
    age: 34,
} 
     
const employee5 = {
    firstName: "Lady",
    lastName: "Madonna",
    DoB: "12/06/1957",
    age: 63,
} 
     
employee1.retiredBy2025 = employee1.retirementYear();
employee1.fullName = employee1.fullNameMerger();
console.log(employee1)
console.log(employee1.getSummary());

employee2.fullNameMerger = employee1.fullNameMerger;
employee2.fullName = employee2.fullNameMerger;
employee2.retirementYear = employee1.retirementYear;
employee2.retiredBy2025 = employee2.retirementYear();
employee2.getSummary = employee1.getSummary

console.log(employee2)
console.log(employee.getSummary());

/**
 
* Create a list of employees of a company,
with first name, last name and age 

*
*
*


* programatically create a new property 
called name which will be a combination of both



* tell which users will be retiring in 2025 
(if they are older then 65) Using filter



* tell if today is going to be their birthday



* tell who is on holidays and when they will 
be back



* tell if someone is on a sick leave



* merge all these in one function that gives 
a summary of employee's situation on the day



Then we can build on this and later create a 
UI with this information as well.

Also, try to what we went through again and recreate the examples.
**/

