/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
/*
 let twoRows = [
     ["moe", "sizlak", "barkeep", 2],
     ["bartholomew", "simpson", "scamp", 3]
   ]
*/

 /*let employees = [
     {
     firstName: "test1",
     familyName: "test1",
     title: "test1",
     payPerHour: 10,
     timeInEvents: ["2019-01-01 0900","2019-01-02 1000"],
     timeOutEvents: ["2019-01-01 1300","2019-01-02 1300"],
     },
     {
         firstName: "test2",
         familyName: "test2",
         title: "test2",
         payPerHour: 100,
         timeInEvents: ["2019-01-01 0900","2019-01-02 1000"],
         timeOutEvents: ["2019-01-01 1300","2019-01-02 1300"],
     }
 
 ]*/
 
 
 const createEmployeeRecord = function([firstName,familyName,title,payPerHour]) {
    let record = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    };
    return record;
    }
     
 
 const createEmployeeRecords = function(twoRows) {
    let employeeRecords = [];
    for(let i=0; i<=twoRows.length-1; i++) {
        let record = createEmployeeRecord(twoRows[i]);
        debugger; 
        employeeRecords.push(record);
    }   
    console.log(employeeRecords)
    return employeeRecords;
 }
 
 const createTimeInEvent = function(timeInRecord) {
    debugger;
     let timeInEventObject = {
         type: "TimeIn",
         hour: Number(timeInRecord.substr(11)),
         date: timeInRecord.substr(0,10),
     }
     this.timeInEvents.push(timeInEventObject);
     debugger;
     console.log(this);
     return this;
 }

 const createTimeOutEvent = function(timeOutRecord) {
     let timeOutEventObject = {
         type: "TimeOut",
         hour: Number(timeOutRecord.substr(11)),
         date: timeOutRecord.substr(0,10),
     }
     this.timeOutEvents.push(timeOutEventObject);
     return this;
 }
 
 const hoursWorkedOnDate = function() {
     const timeIn = this.timeInEvents[0].hour;
     const timeOut = this.timeOutEvents[0].hour;
     const hoursWorked = (timeOut-timeIn)/100;
     return hoursWorked;
 }
 
 const wagesEarnedOnDate = function() {
     const hoursWorkedPay = hoursWorkedOnDate.call(this);
     let pay = hoursWorkedPay*(this.payPerHour);
     return pay;   
 }
 
 const allWagesFor = function() {
     let hoursWorked = 0;
     for(let i=0; i<=(this.timeInEvents.length)-1; i++) {
         const timeIn = this.timeInEvents[i].hour;
         const timeOut = this.timeOutEvents[i].hour;
         let hours = (timeOut-timeIn)/100;
         hoursWorked += hours;
     }
     let wage = hoursWorked*this.payPerHour;
     return wage;
 }
 
 const calculatePayroll = function(employees) {
     employees;
     debugger;
     let hoursWorked = [];
     debugger;
     for(let j=0; j<=(employees.length)-1; j++){
     for(let i=0; i<=(employees[j].timeInEvents.length)-1; i++) {
         const timeIn = employees[j].timeInEvents[i].hour;
         const timeOut = employees[j].timeOutEvents[i].hour;
         let hours = (timeOut-timeIn)/100;
         let hoursPay = hours*(employees[j].payPerHour);
         hoursWorked.push(hoursPay);
         debugger;
         }
     }
     const totalPay = hoursWorked.reduce(function(accumulator, currentValue) {
         return accumulator + currentValue;
     },0)
     console.log(totalPay);
     return totalPay;
 }

 const findEmployeeByFirstName = function(collection, firstNameString) {
    for (let i=0; i<=collection.length-1; i++) {
        debugger;
        if (collection[i].firstName === firstNameString){
            debugger;
            let result = collection[i];
            console.log(result);
            return result;
        }else {
            continue;
        }
    }
 }
 let src = [
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150]
  ]
  /*
 let emps = createEmployeeRecords(src)
 let loki = findEmployeeByFirstName(emps, "Loki")
 console.log(loki.familyName)*/
/*
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}*/

