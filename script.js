'use strict';

// import * as React from 'react';
// import './style.css';
const todaysDate = new Date()
const thisYear = 2022

const employees = [

 {
    firstName: "Paul",
    lastName: "Daniels",
    DoB: "12/6/1958",
    age: 64,
},

 {
    firstName: "Reo",
    lastName: "Hatate",
    DoB: "12/06/1998",
    age: 24,
}, 

 {
    firstName: "Jessica",
    lastName: "Rabbit",
    DoB: "12/06/1978",
    age: 44,
}, 
     
{
    firstName: "Joe",
    lastName: "Hart",
    DoB: "12/06/1988",
    age: 34,
}, 
     
{
    firstName: "Lady",
    lastName: "Madonna",
    DoB: "12/06/1957",
    age: 63,
} 
];
console.log(employees)

//create function that loops through addin fullname
console.log(employees[0].firstName, employees[0].lastName);
for(let i = 0; i < employees.length; i++) {
    // if (employees[i].fullName == false) 
    employees[i].fullName = employees[i].firstName + " " + employees[i].lastName;
}

for(let i = 0; i < employees.length; i++) {
    employees[i].retirementYear = 65 - employees[i].age + thisYear;
    employees[i].retiredBy25 = employees[i].retirementYear <= 2025 ? true : false;
}

console.log(todaysDate)

/**
 
* Create a list of employees of a company,
with first name, last name and age 

*
*
*


* programatically create a new property 
called name which will be a combination of both



* tell which users will be retiring in 2025 
(if git c are older then 65) Using filter



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

