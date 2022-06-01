import { generateCompanyStructure, promoteEmployee, demoteEmployee, fireEmployee, hireEmployee  } from './manageEmployees';
import { getBoss, getSubordinates } from './getEmployees'
import * as employeesData from './employees.json';
import { IEmployeeData,IEmployeeObj } from './IEmployee';

// Main code goes here
function main() {
    const companyTree = generateCompanyStructure(employeesData)
    console.dir(companyTree, {depth:null, color:true})
    const hire = hireEmployee(companyTree, "Jeb", "Sarah")
    const fire = fireEmployee(companyTree, "Alicia")
    const sub = promoteEmployee(companyTree, "Jared")
    const demote = demoteEmployee(companyTree, "Xavier", "Maria")
    getBoss(companyTree, "jared")
    getSubordinates(companyTree, "Maria")
    console.dir(companyTree, {depth:null, color:true})
    // console.log(hire)
    // console.log(fire)
    // console.log(sub)
    // console.log(demote)
    // console.dir(companyTree, {depth:null, color:true})
}

main()
