# README
I was aware of some of the linting issues because of time constraints i wasnt able to get to all of them. 

## Instruction to run code
fork from the repo, copy code and paste in terminal.
ensure you have this version of yarn 1.22.19 and node v14.19.3 installed.
run yarn start in command line  


## My Approach logic/style
My first approach was to implement a Typescript interface then proceeded to create the tree structure using the json data array and stored all employees and their employee subtrees as treenodes. I would use a data structure (queue) to perform FIFO and check root node subtrees use a BFS travesal to traverse the tree to insert, delete, search, swap and to get bosses and their subordinates. I implement a for loop to split and slice employees whos names where filled in with their email to just store their first name. I would call on the getEmployeeStructure function inside the generateCompanyStructure function to create our tree.

- getBoss 0(h) height of the tree, the function to get parent node of employee in subtree. when i find the employee name i am looking for i return its parent node.

- getSubordinates 0(h) height of the tree
implement a for loop to find the given employee's subtree.

- fireEmployee 0(h) 
for this function i searched for the employee we are looking to remove from the tree.
first implementing a BFS using a queue, shift the current node and check if it is the employee we are looking to remove from the tree, if no, go to the next node and repeat the same steps. When i get to the node i am looking for, i check to see if it has a subtree (descendants), if yes, swap the node we want to remove with the prefered descendant then proceed to remove the node and break the loop.

- hireEmployee 0(h)
For this function i decide to insert a new treenode as child (descendant) under root node using the getEmployeeStructure function to call for (parent node). 

For both promoteEmployee and demoteEmployee function i decided to create helper functions "loop through descendants" and "swapEmployees" functions, to prevent from repeating myself and keep it simple, I wanted to apply the D.R.Y principle for these functions.

swapEmployees function we swap the employeeName we are looking for with the name we want to replace swap places with.

The loop through Employees function loops through the nodes in subtrees. inside the function we are using a switch statment that selects either code block for specific case.

- promoteEmployee 0(h)
For this function, i decided to implement BFS using queue to travese the tree and search for the employee name we want to promote. I use shift method to remove current node and check if its value matches the name we are looking to promote, if it is not the name we are looking for, i checked if it has descendants and if yes, to call the "loop through descendants" function. once I found the employeeName i would call the "swapEmployee" function to change positions with their boss(parent node) 

- demoteEmployee 0(h)
For this function, again i decided to implement BFS using queue to travese the tree and search for the employee name we want to demote. I used shift method to remove current node and check if its value matches the employeeName i am looking to demote. Then, i checked if the current node has descendants if yes, i call the "loop through descendants" function.  when i have found the employeeName and SubordinateName i call thge "swapEmployees" function to make the swap

-findLowestEmployee for this function i would traverse the tree using BFS and each time i go down a level i would keep track of the level by using a map data structure and save employees along with their respective level and then when i get to the last level i would look for the last employee.


## If i had more time
if i had more time i would create a data structure (hashmap) to house employees. The key would be names and value would be an object with level, boss and descendant as properties and i would update the data structure as i am building the tree. 


### Bonus
- **Time Complexity**
- GenerateCompanyStructure 0(h)
- getBoss 0(h)  height of the tree 
- getSubordinates  0(h) height of the tree
- fireEmployee 0(h) 
- hireEmployee 0(h)
- promoteEmployee 0(h)
- demoteEmployee 0(h)

### Bonus
- The demote and promote functions can be merge into one since it only envolves swapping two employees position for one another. The swapEmployee function is called when making the swaps.

### Running the App
- clone repo and paste in terminal. Open code and use `yarn start` to run the functions.
