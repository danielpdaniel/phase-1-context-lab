/* Your Code Here */
function createEmployeeRecord(array){
    const obj ={
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents:[]
    }
    return obj
}

function createEmployeeRecords(array){
    let newArray = [];
    for(const e of array){
        newArray.push(createEmployeeRecord(e))
    }
    return newArray
}

function createTimeInEvent(dateStamp){
    let dateArray = dateStamp.split(" ")
    let timeInObj = {
    type: "TimeIn",
    hour: parseInt(dateArray[1], 10),
    date: dateArray[0]
   }
   const newObj = this.timeInEvents.push(timeInObj)
   return this
}

function createTimeOutEvent(dateStamp){
    let dateArray = dateStamp.split(" ")
    let timeOutObj = {
    type: "TimeOut",
    hour: parseInt(dateArray[1], 10),
    date: dateArray[0]
   }
   const newObj = this.timeOutEvents.push(timeOutObj)
   return this
}

function hoursWorkedOnDate(dateString){
   let dateInObj = this.timeInEvents.find(e => e.date === dateString);
   let dateOutObj = this.timeOutEvents.find(e => e.date === dateString);
    
    return (dateOutObj.hour - dateInObj.hour) / 100;
}

function wagesEarnedOnDate(dateString){
    const hoursWorked = hoursWorkedOnDate.call(this, dateString);
    //^^kinda confused by this? why did i have to call it? shouldnt
    //the context for this already be the employee record object?
    const rate = this.payPerHour

    return  rate * hoursWorked
}

function findEmployeeByFirstName(srcArray, firstName){
   const employeeObj = srcArray.find(e => e.firstName === firstName);
   return employeeObj
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function calculatePayroll(recordsArray){
    // const newArray = recordsArray.map(e => allWagesFor.call(this, e))
    // return newArray
    let newArray = [];
    for(const j of recordsArray){
        
       newArray.push(allWagesFor.call(j))
        
    }
    // return newArray[0].timeInEvents[0].hour
    // return allWagesFor.call(recordsArray[0])
    return newArray.reduce((total,current)=>total + current, 0)
}

