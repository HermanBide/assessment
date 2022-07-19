
// export function promoteEmployee(tree: TreeNode, employeeName: string): void {
//     let employee = getBoss(tree, employeeName)
//     if(!employee) {
//         return  
//     } 
//     const queue: TreeNode[] = [tree]
//     while (queue.length) {
//         const currNode: TreeNode = queue.shift()
//         for (const node of currNode.descendants) {
//             const desc: TreeNode = node 
//             if(desc.value === employeeName) {
//                 //swap function
//                 // let temp = desc.value 
//                 // desc.value = currNode.value
//                 // currNode.value = temp
//                 swapEmployees(desc, currNode)
//             }  
//         }
//         queue.push(...currNode.descendants)
//     }
// }


// export function demoteEmployee(tree: TreeNode, employeeName: string, subordinateName: string): void {
//     const queue: TreeNode[] = [tree] 

//     while(queue.length) {
//         const currNode: TreeNode = queue.shift();
//         for (const node of currNode.descendants){
//             const desc: TreeNode = node
//             if(desc.descendants.length) {
//                 const employee: TreeNode = desc.descendants[0] 
//                 if(desc.value === employeeName && employee.value === subordinateName ) {
//                     //swap function
//                     // let temp = desc.value 
//                     // desc.value = employee.value
//                     // employee.value = temp
//                     swapEmployees(desc, employee)
//                     break
//                 }
//             }
//         } 
//         queue.push(...currNode.descendants)
//     }
// }

// function swapEmployees(pos1, pos2) {
//     let temp = pos1.value 
//     pos1.value = pos2.value
//     pos2.value = temp
// }

