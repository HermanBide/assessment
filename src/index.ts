import { generateCompanyStructure, promoteEmployee, demoteEmployee, fireEmployee, hireEmployee, TreeNode  } from './manageEmployees';
import { getSubordinates, getBoss } from './getEmployees'
// import { IEmployeeData} from './IEmployee';
import * as employeesData from './employees.json';


// Main code goes here
/**
 * @returns {TreeNode}
 */
function main() {
    const companyTree = generateCompanyStructure(employeesData);
    console.dir(companyTree, {depth:null, color:true});
    const hire = hireEmployee(companyTree, "Jeb", "Sarah");
    const fire = fireEmployee(companyTree, "Alicia");
    const promote = promoteEmployee(companyTree, "Jared");
    const demote = demoteEmployee(companyTree, "Xavier", "Maria");
    const boss = getBoss(companyTree, "Bill");
    const sub = getSubordinates(companyTree, "Maria");
    console.dir(companyTree, {depth:null, color:true});
    console.log(hire);
    console.log(fire);
    console.log(promote);
    console.log(demote);
    console.log('bosses', boss);
    console.log('Employees', sub);
}
main();
