# README

## My Approach
My first approach was to implement a Typescript interface then proceeded to create the tree structure using the json data array and stored all employees and their relations as treenodes. I would use a linear structure (queue) to perform FIFO and check root node descendants use a BFS travesal to traverse the tree to insert, delete, search, to get bosses and their subordinates. I would implement a for loop to split and slice employees whos names where filled in with their email to just store their first name. I would call on the getBoss function inside functions like promoteEmployee to find the employees boss and store new hires as boss descendants.

- GenerateCompanyStructure 0(1)
if name included '@' to get name before '@' and remove the rest.

- getBoss 0(h)  height of the tree 


- getSubordinates  0(h) height of the tree
implement a for loop over 

- fireEmployee 0(logn) 
search for the employee we are looking to remove from the tree.
first wanted to conduct a BFS using a queue to get nodes
if the node in the queue isnt who we are looking for, we shift and go to the next node and compare with the given name that is passed as argument. when we get the name we check its descendants and swap name with one of its descendants then proceed to remove the name and break the loop.

- hireEmployee 0(logn)
    create a new treenode, push (insert) the new treenode as child (descendant) under rootnode using the getBoss function to call for (parent node). 

- promoteEmployee 0(n)
For this function, i decided to implement BFS using queue to travese the tree and search for the employee name we want to promote. I would check use shift method to remove current node and check if its value matches name we are looking to promote. once I found the employeeName i would swap positions with their boss 

- demoteEmployee 0(n)
For this function, again i decided to implement BFS using queue to travese the tree and search for the employee name we want to demote. I would check use shift method to remove current node and check if its value matches name we are looking to demote. once found i would look to check if they had descendants and if yes i would proceed to swap the employeeName with the SubordinateName

### Bonus
- **Time Complexity**
- GenerateCompanyStructure 0(1)
- getBoss 0(h)  height of the tree 
- getSubordinates  0(h) height of the tree
- fireEmployee 0(logn) 
- hireEmployee 0(logn)
- promoteEmployee 0(n)
- demoteEmployee 0(n)

### Bonus
- The demote and promote functions can be merge into one since it only envolves swapping two employees position for one another.

### Running the App
- clone repo and paste in terminal. Open code and use `yarn start` to run the functions.
