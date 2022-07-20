import { getEmployeeSubtree} from './getEmployees';
import { IEmployeeData} from './IEmployee';

export class TreeNode {
    value: any;
    descendants: TreeNode[];
    constructor(value: string = null) {
        this.value = value;
        this.descendants = [];
    };
};

/**
 * Normalizes the provided JSON file and generates a tree of employees.
 *
 * @param {IEmployeeData[]} employeesData array of employees
 * @returns {TreeNode}
 */
export function generateCompanyStructure(employeesData: IEmployeeData): TreeNode {
    console.log('Normalizing JSON file...');
    let employeeTree: TreeNode;

    for (const employee of employeesData.employees) {
        let name: any = employee.name;
        if (name.split('').includes('@')) {
            const firstName: string = name.split('@')[0];
            name = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        };
        if (!employee.boss) {
            employeeTree = new TreeNode(name);
            continue;
        } else {
            const employeeNode: TreeNode = new TreeNode(name);
            const bossNode: any = getEmployeeSubtree(employeeTree, employee.boss);
            bossNode.descendants.push(employeeNode);
        };
    };
    return employeeTree;
}

/**
 * Adds a new employee to the team and places them under a specified boss.
 *
 * @param {TreeNode} tree
 * @param {Object} newEmployee
 * @param {string} bossName
 * @returns {void}
 */
export function hireEmployee(tree: TreeNode, newEmployee: string, bossName: string): void {
    const newbie: TreeNode = new TreeNode(newEmployee);
    const bossNode: TreeNode = getEmployeeSubtree(tree, bossName);
    if(bossNode.value === bossName) {
        bossNode.descendants.push(newbie);
    };
};
/**
 * Removes an employee from the team by name.
 * If the employee has other employees below them, randomly selects one to take their place.
 *
 * @param {TreeNode} tree    
 * @param {string} name employee's name
 * @returns {void}
 */
export function fireEmployee(tree: TreeNode, name: string): void {
    const queue: TreeNode[] = [tree];
    while (queue.length) {
        const currNode: TreeNode = queue.shift(); 
        for (let i = 0; i < currNode.descendants.length; i++) {
            const desc: TreeNode = currNode.descendants[i];
            if (desc.value === name && desc.descendants.length) {
                const employee: TreeNode = desc.descendants[1];
                    desc.value = employee.value;
                    desc.descendants.splice(i, 1);
                    break;
            };
        };
        queue.push(...currNode.descendants);   
    };
};


/**
 * Promotes an employee one level above their current ranking.
 * The promoted employee and their boss should swap places in the hierarchy.
 *
 * @param {TreeNode} tree
 * @param {string} employeeName
 * @returns {void}
 */
export function promoteEmployee(tree: TreeNode, employeeName: string): void {
    if (!getEmployeeSubtree(tree, employeeName)) {
        return;  
    };
    const queue: TreeNode[] = [tree];
    while (queue.length) {
        const currNode: TreeNode = queue.shift();
        loopThroughDescendants(currNode, employeeName);
        queue.push(...currNode.descendants);
    };
};

/**
 * Demotes an employee one level below their current ranking.
 * Picks a subordinat and swaps places in the hierarchy.
 *
 * @param {TreeNode} tree
 * @param {string} employeeName the employee getting demoted
 * @param {string} subordinateName the new boss
 * @returns {void}
 */
export function demoteEmployee(tree: TreeNode, employeeName: string, subordinateName: string): void {
    const queue: TreeNode[] = [tree];
    while (queue.length) {
        const currNode: TreeNode = queue.shift();
        loopThroughDescendants(currNode, employeeName, 'demote', subordinateName);
        queue.push(...currNode.descendants);
    };
};

function loopThroughDescendants(currNode: TreeNode, employeeName: string, type:string = null , subordinateName: string = null): void{
    for (const childNode of currNode.descendants) {
        const desc: TreeNode = childNode;
        switch (type) {
            case 'demote':
                if (desc.descendants.length && desc.value === employeeName && desc.descendants[0].value === subordinateName ) {
                    swapEmployees(desc, desc.descendants[0]);
                    return;
                }
                break;
            default:
                if (desc.value === employeeName) {
                    swapEmployees(desc, currNode);
                };
                break;
        };
    }; 
};

function swapEmployees(employee1: TreeNode, employee2: TreeNode): void {
    let temp = employee1.value;
    employee1.value = employee2.value;
    employee2.value = temp;
};
