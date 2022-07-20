# README

## My Approach
My first approach was to implement a Typescript interface then proceeded to create the tree structure using the json data array and stored all employees and their employee subtrees as treenodes. I would use a data structure (queue) to perform FIFO and check root node subtrees use a BFS travesal to traverse the tree to insert, delete, search, swap and to get bosses and their subordinates. I implement a for loop to split and slice employees whos names where filled in with their email to just store their first name. I would call on the getEmployeeStructure function inside the generateCompanyStructure function to create our tree.


- getBoss 0(h)  height of the tree, the function to get parent node of employee in subtree


- getSubordinates  0(h) height of the tree
implement a for loop to find the given employee's subtree

- fireEmployee 0(1) 
search for the employee we are looking to remove from the tree.
first implemented a BFS using a queue. shift the current node and check if it is the employee we are looking to remove from the tree if no go to the next node and repeat the steps. When we get to the node we are looking for i check to see if it has  descendants, if yes, swap node we want to remove with one of its descendants then proceed to remove the node and break the loop.

- hireEmployee 0(1)
    for this function i decide to insert a new treenode as child (descendant) under root node using the getEmployeeStructure function to call for (parent node). 


For both promoteEmployee and demoteEmployee function i decided to create helper functions "loop through descendants" and "swapEmployees" functions, to prevent from repeating myself and keep it simple, I decided to apply the D.R.Y principle. 

- promoteEmployee 0(1)
For this function, i decided to implement BFS using queue to travese the tree and search for the employee name we want to promote. I use shift method to remove current node and check if its value matches name we are looking to promote, if it is not the name we are looking for i checked if it has descendants and if yes call the "loop through descendants" function. once I found the employeeName i would call the swapEmployee function to change positions with their boss(parent node) 

- demoteEmployee 0(1)
For this function, again i decided to implement BFS using queue to travese the tree and search for the employee name we want to demote. I used shift method to remove current node and check if its value matches the employeeName i am looking to demote. Then, i checked if the current node has descendants if yes, i call the "loop through descendants" function.  when i have found the employeeName and SubordinateName i call thge "swapEmployees" function to make the swap

### Bonus
- **Time Complexity**
- GenerateCompanyStructure 0(1)
- getBoss 0(h)  height of the tree 
- getSubordinates  0(h) height of the tree
- fireEmployee 0(1) 
- hireEmployee 0(1)
- promoteEmployee 0(1)
- demoteEmployee 0(1)

### Bonus
- The demote and promote functions can be merge into one since it only envolves swapping two employees position for one another. The swapEmployee function called when making the swaps.

### Running the App
- clone repo and paste in terminal. Open code and use `yarn start` to run the functions.
