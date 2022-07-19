import { generateCompanyStructure, promoteEmployee, demoteEmployee, fireEmployee, hireEmployee  } from './manageEmployees';
import { getEmployeeSubtree, getSubordinates, getBoss } from './getEmployees'
import * as employeesData from './employees.json';
import { IEmployeeData,IEmployeeObj } from './IEmployee';

// Main code goes here
function main() {
    const companyTree = generateCompanyStructure(employeesData)
    console.dir(companyTree, {depth:null, color:true})
    const hire = hireEmployee(companyTree, "Jeb", "Sarah")
    const fire = fireEmployee(companyTree, "Alicia")
    const promote = promoteEmployee(companyTree, "Jared")
    const demote = demoteEmployee(companyTree, "Xavier", "Maria")
    // const subTree = getEmployeeSubtree(companyTree, "Bill")
    const boss = getBoss(companyTree, "Bill")
    // const sub = getSubordinates(companyTree, "Maria")
    console.dir(companyTree, {depth:null, color:true})
    console.log(hire)
    console.log(fire)
    console.log(promote)
    console.log(demote)
    // console.log('subTree', subTree)
    console.log('bosses', boss)
    // console.log('Employees', sub)
}

main()
