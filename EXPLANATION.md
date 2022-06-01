# README

## My Approach
My first approach was to implement a Typescript interface. Then i proceeded to create a tree like structure using the json data array and stored all employees and their relations as treenodes. I would use a linear structure (queue) to perform FIFO and check root node descendants use a BFS travesal to traverse the tree to get information such as the bosses and their subordinates. I would implement a for loop to split and slice employees whos names where filled in with their email to just store their first name. I would call on the getBoss function inside functions like promoteEmployee to find the employees boss and store new hires as boss descendants.

### Bonus
- **Time Complexity**
- getBoss ( 0(1) )
- getSubordinates ( 0(n) )
- fireEmployee ( 0(n) )
- hireEmployee (0(n) )
- promoteEmployee
- demoteEmployee

### Bonus
- The demote and promote functions can be merge into one since it only envolves swapping two employees position for one another.
