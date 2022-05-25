import { generateCompanyStructure, promoteEmployee, demoteEmployee, fireEmployee  } from './manageEmployees';
import { getSubordinates } from './getEmployees'
import * as employeesData from './employees.json';

// Main code goes here
function main() {
    const companyTree = generateCompanyStructure(employeesData)
    const fire = fireEmployee(companyTree, "bill")
    // const sub = promoteEmployee(companyTree, "Alicia")
    // const demote = demoteEmployee(companyTree, "Xavier", "Bill")
    // promoteEmployee(companyTree,)
    console.log(fire)
}

main()
