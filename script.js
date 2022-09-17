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
 
// * Create a list of employees of a company,
// with first name, last name and age 



// * programatically create a new property 
// called name which will be a combination of both



* tell which users will be retiring in 2025 
(if they are older then 65) Using filter
* tell if today is going to be their birthday

-follow tutorials on date function!! 
-format date to include only mm/dd/yyyy
-create filter program to return list of retirees by 2025
-create function that compares mm/dd of DoB to current
-- return happy birthday message on UI


* tell who is on holidays and when they will 
be back
-create new array called holidayNow within employee records
-first value is true or false, 2nd is return date
-return array of holiday status and if on holiday return date
?? map, filter or for?? 

** could create object that stores all holiday dates
-iterates through holidays confirmedAnnualLeave(2 value set with start date end date)
and checks if current date is between said dates.
-automatically updates holiday status
-automatically calculates (let) remainingAnnualLeave 
subtracting from global const totalAnnual

***add code to ensure Saturdays and Sundays are not subtracted 
from leave


* tell if someone is on a sick leave
- object sickRecord within employee record
- boolean value

--additional fuctionality similar to holiday, ie expected 
return, doctorsNote, DNExpiry, total sick leave for period

-- can create rules with automatic triggers 
upon overstepping conditions



* merge all these in one function that gives 
a summary of employee's situation on the day

-easy peasy



Then we can build on this and later create a 
UI with this information as well.

Also, try to what we went through again and recreate the examples.
**/

