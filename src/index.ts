import { generateCompanyStructure, promoteEmployee, demoteEmployee, fireEmployee, hireEmployee  } from './manageEmployees';
import { getBoss, getSubordinates } from './getEmployees'
import * as employeesData from './employees.json';
import { IEmployeeData,IEmployeeObj } from './IEmployee';

// Main code goes here
function main() {
    const companyTree = generateCompanyStructure(employeesData)
    // const hire = hireEmployee(companyTree, "jeb", "Sarah")
    // const fire = fireEmployee(companyTree, "Alicia")
    console.dir(companyTree, {depth:null, color:true})
    // const sub = promoteEmployee(companyTree, "Jared")
    const demote = demoteEmployee(companyTree, "Xavier", "Maria")
    console.dir(companyTree, {depth:null, color:true})
    // promoteEmployee(companyTree,)
    // console.log(hire)
    // console.log(fire)
    // console.log(sub)
    // console.log(demote)
    // getBoss(companyTree, "jared")
    // getSubordinates(companyTree, "Maria")
    // console.dir(companyTree, {depth:null, color:true})
}

main()
