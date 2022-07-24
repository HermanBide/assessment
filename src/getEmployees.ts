import {TreeNode} from './manageEmployees';
/**
 * 
 * @param {TreeNode} tree
 * @param {string} employeeName
 * @returns {TreeNode}
 */
export function getEmployeeSubtree(tree: TreeNode, employeeName: string): TreeNode {
  const queue: [TreeNode] = [tree];

  while (queue.length) {
    const currNode: TreeNode = queue.shift();
    if (employeeName === currNode.value) {
      return currNode;
    };
    queue.push(...currNode.descendants);
  };
};

/** 
* Given an employee, will find the node above (if any).
* @param {TreeNode} tree
 * @param {string} employeeName
 * @returns {TreeNode}
 */
export function getBoss(tree: TreeNode, employeeName: string): TreeNode {
  const queue: [TreeNode] = [tree];

  while (queue.length) {
    const currNode: TreeNode = queue.shift();
    for (const subordinate of currNode.descendants) {
      if (employeeName === subordinate.value) {
          console.log(`\n[getBoss]: ${employeeName}'s boss is ${currNode.value}`);
          return currNode;
      };
    };
    queue.push(...currNode.descendants);
  };
};

/**
 * Given an employee, will find the nodes directly below (if any).
 * Notice how it returns possibly several subordinates.
 * 
 * @param {TreeNode} tree
 * @param {string} employeeName
 * @returns {TreeNode[]}
 */
export function getSubordinates(tree: TreeNode, employeeName: string): TreeNode[] {
  const employeeNode: TreeNode = getEmployeeSubtree(tree, employeeName);
  if (employeeNode) {
    const employeeDesc = employeeNode.descendants.map(desc => desc.value).join(', ');
    console.log(`[getSubordinate]: ${employeeName}'s subordinates are ${employeeDesc}`);
    return employeeNode.descendants;
  } else {
    return [];
  };
};

/**
 * EXTRA CREDIT:
 * Finds and returns the lowest-ranking employee and the tree node's depth index.
 * 
 * @param {TreeNode} tree
 * @param {string} employeeName
 * @returns {TreeNode}
 */
function findLowestEmployee() {

}