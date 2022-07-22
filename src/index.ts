import { generateCompanyStructure, promoteEmployee, demoteEmployee, fireEmployee, hireEmployee, TreeNode  } from './manageEmployees';
import { getSubordinates, getBoss } from './getEmployees'
// import { IEmployeeData} from './IEmployee';
import * as employeesData from './employees.json';


// Main code goes here
/**
 * @returns {TreeNode}
 */
function main():void {
    const companyTree: any = generateCompanyStructure(employeesData);
    console.dir(companyTree, {depth:null, color:true});
    const hire: any = hireEmployee(companyTree, "Jeb", "Sarah");
    const fire: any = fireEmployee(companyTree, "Alicia");
    const promote: any = promoteEmployee(companyTree, "Jared");
    const demote: any = demoteEmployee(companyTree, "Xavier", "Maria");
    const boss: any = getBoss(companyTree, "Bill");
    const sub: any = getSubordinates(companyTree, "Maria");
    console.dir(companyTree, {depth:null, color:true});
    console.log(hire);
    console.log(fire);
    console.log(promote);
    console.log(demote);
    console.log('bosses', boss);
    console.log('Employees', sub);
}
main();
