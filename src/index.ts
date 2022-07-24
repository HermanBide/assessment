import { generateCompanyStructure, promoteEmployee, demoteEmployee, fireEmployee, hireEmployee  } from './manageEmployees';
import { getSubordinates, getBoss } from './getEmployees';
import * as employeesData from './employees.json';


// Main code goes here
/**
 * @returns {TreeNode}
 * @returns {void}
 */
function main():void {
    const companyTree = generateCompanyStructure(employeesData);
    hireEmployee(companyTree, "Jeb", "Sarah");
    fireEmployee(companyTree, "Alicia");
    promoteEmployee(companyTree, "Jared");
    demoteEmployee(companyTree, "Xavier", "Maria");
    getBoss(companyTree, "Bill");
    getSubordinates(companyTree, "Maria");
}

main();
