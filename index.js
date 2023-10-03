function createEmployeeRecord(array){

    const obj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }

return obj;

}

function createEmployeeRecords(Arrays){
    return Arrays.map(array => createEmployeeRecord(array));
}

function createTimeInEvent(employee,timedate){
    const dateTime = timedate.split(" ");
  

employee.timeInEvents.push({
    type:'TimeIn',
    hour: parseInt(dateTime[1]),
    date: dateTime[0]

   
})

return employee;
}

function createTimeOutEvent(employee,timedate){
    const dateTime = timedate.split(" ");
  

employee.timeOutEvents.push({
    type:'TimeOut',
    hour: parseInt(dateTime[1]),
    date: dateTime[0]

   
})

return employee;
}


function hoursWorkedOnDate(employee,date){

    const TimeIn = employee.timeInEvents.find(event =>event.date === date).hour;
    const TimeOut = employee.timeOutEvents.find(event =>event.date === date).hour;

    return (TimeOut - TimeIn)/100;

}


function wagesEarnedOnDate(employee,date){

    const hoursworked =  hoursWorkedOnDate(employee,date);
    return hoursworked * employee.payPerHour


}

function allWagesFor(employee){
   const dateworked = employee.timeInEvents.map(event => event.date);
   return dateworked.reduce((total,date) =>{
    return total + wagesEarnedOnDate(employee,date);
   },0);
}


function calculatePayroll(array){

    return array.reduce((total,employee) =>{
        return total + allWagesFor(employee);
    },0)

}