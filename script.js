'use strict';

// import * as React from 'react';
// import './style.css';

// const thisYear = 2022;
// console.log(todaysDate)
const todaysDate = new Date();
console.log(todaysDate)

const year = todaysDate.getFullYear();
const month = `${todaysDate.getMonth()}`.padStart(2, 0);
const day = `${todaysDate.getDay()}`.padStart(2, 0);
const formatDate = `${day}/${month}/${year}`;
console.log(formatDate);
console.log(day, month, year)
 
const employee1 = {
    firstName: "Paul",
    lastName: "Daniels",
    DoB: "12/06/1958",
    age: 64,
};

 const employee2 = {
    firstName: "Reo",
    lastName: "Hatate",
    DoB: "01/08/1998",
    age: 24,
}; 

 const employee3 = {
    firstName: "Jessica",
    lastName: "Rabbit",
    DoB: "12/06/1978",
    age: 44,
}; 
     
const employee4 = {
    firstName: "Joe",
    lastName: "Hart",
    DoB: "12/06/1988",
    age: 34,
}; 
     
const employee5 = {
    firstName: "Lady",
    lastName: "Madonna",
    DoB: "12/06/1957",
    age: 63,
}; 

const employees = [employee1, employee2, employee3, employee4, employee5, ];
console.log(employees)
// console.log(employee1)
//create function that loops through addin fullname
// console.log(employees[0].firstName, employees[0].lastName);
for(let i = 0; i < employees.length; i++) {
    // if (employees[i].fullName == false) 
    employees[i].fullName = `${employees[i].firstName } ${employees[i].lastName}`;
}


// for(let i = 0; i < employees.length; i++) {
//     employees[i].retirementYear = 65 - employees[i].age + thisYear;
//     employees[i].retiredBy25 = employees[i].retirementYear <= 2025 ? true : false;
// }
const retireBy2025 = employees.filter(line => 2025 - year + line.age >= 65) 

// console.log(employees.age)
console.log(retireBy2025)

// create function that returns date dd/mm
const getDayMonth = function(date) {
    const dayMonth = date
    .split("/")
    .filter(val => (val < 32))
    .join("/");
    // console.log(dayMonth)
    return dayMonth
}
// getDayMonth(formatDate)
// getDayMonth(employee1.DoB)

const birthdayChecker = function(date1, date2, object) {
    (date1 === date2) ?
    console.log(`Happy Birthday ${object.firstName}🎉 Have a great day!!!`):
    console.log(`Get back to work ${object.lastName}!!`)
  };

  for (const employee of employees) {
    birthdayChecker(getDayMonth(employee.DoB), getDayMonth(formatDate), employee)
  }
//pass into higher function that compares 
//and prints happy birthday message 





/**
 
// * Create a list of employees of a company,
// with first name, last name and age 



// * programatically create a new property 
// called name which will be a combination of both



// * tell which users will be retiring in 2025 
// (if they are older then 65) Using filter
* tell if today is going to be their birthday

// -follow tutorials on date function!! 
// -format date to include only mm/dd/yyyy
// -create filter program to return list of retirees by 2025
-create function that compares mm/dd of DoB to current
-- return happy birthday message on UI


//++COULD USE HIGHER ORDER FUNCTION FOR SICK AND HOLIDAY

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

