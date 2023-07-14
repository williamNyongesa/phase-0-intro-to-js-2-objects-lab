// Write your solution in this file!
var employee = {
    name: 'sam',
    streetAddress: '11 Broadway'
  };
 
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, 
      [key]: value 
    };
  }
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    var newEmployee = { ...employee }; 
    delete newEmployee[key]; 
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee; 
  }