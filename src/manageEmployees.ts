import { getBoss, getEmployeeSubtree} from './getEmployees';
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
 * @param {IEmployeeData[]} employeesData array of employees
 * @returns {TreeNode}
 */
export function generateCompanyStructure(employeesData: IEmployeeData): TreeNode {
    console.log('Normalizing JSON file...');
    let employeeTree: TreeNode;
    console.log('Generating employee tree...\n');
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
        // console.log(`Added new employee ${newEmployee} with ${getBoss(tree, newEmployee).value} as their boss`);
        //TODO
        // This is proof that the employee was added. I comment out the console.log above, i wanted make sure the getboss function was calling the right name.
        console.log(`[hireEmployee]: Added new employee ${newEmployee} with ${bossName} as their boss`);
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
                console.log(`[fireEmployee]: Fired ${name} and replaced with ${employee.value}`);
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
    let subordinate: string = "";
    while (queue.length) {
        const currNode: TreeNode = queue.shift();
        const employee = loopThroughDescendants(currNode, employeeName);
        if (employee !== undefined) {
            subordinate = employee;
            break;
        }
        queue.push(...currNode.descendants);
    };
    console.log(`[promoteEmployee]: Promoted ${employeeName} and made ${subordinate} his subordinate`);
};

/**
 * Demotes an employee one level below their current ranking.
 * Picks a subordinat and swaps places in the hierarchy.s
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
    console.log(`[demoteEmployee]: Demoted ${employeeName} and replaced with ${subordinateName}`);
};
/**
 * @param {TreeNode} currNode
 * @param {string} employeeName the employee getting demoted
 * @param {string} subordinateName the new boss
 * @returns {string}
 */

function loopThroughDescendants(currNode: TreeNode, employeeName: string, type:string = null, subordinateName: string = null): string {
    let subordinate: string = ""
    for (const childNode of currNode.descendants) {
        const desc: TreeNode = childNode;
        switch (type) {
            case 'demote':
                if (desc.descendants.length && desc.value === employeeName && desc.descendants[0].value === subordinateName ) {
                    subordinate = swapEmployees(desc, desc.descendants[0]);
                    return subordinate;
                }
                break;
            default:
                if (desc.value === employeeName) {
                    subordinate = swapEmployees(desc, currNode);
                    return subordinate;
                };
                break;
        };
    }; 
};

/**
 * @param {string} employee1
 * @param {string} employee2 
 * @returns {string}
 */
function swapEmployees(employee1: TreeNode, employee2: TreeNode): string {
    const temp: string = employee1.value;
    employee1.value = employee2.value;
    employee2.value = temp;
    return employee1.value;
};
