# README

## My Approach
<<<<<<< HEAD
My first approach was to implement a Typescript interface then proceeded to create the tree structure using the json data array and stored all employees and their relations as treenodes. I would use a linear structure (queue) to perform FIFO and check root node descendants use a BFS travesal to traverse the tree to insert, delete, search, to get bosses and their subordinates. I would implement a for loop to split and slice employees whos names where filled in with their email to just store their first name. I would call on the getBoss function inside functions like promoteEmployee to find the employees boss and store new hires as boss descendants.
=======
My first approach was to implement a Typescript interface then proceeded to create the tree structure using the json data array and stored all employees and their relations as treenodes. I would use a linear structure (queue) to perform FIFO and check root node descendants use a BFS travesal to traverse the tree to insert, delete, search get bosses and their subordinates. I would implement a for loop to split and slice employees whos names where filled in with their email to just store their first name. I would call on the getBoss function inside functions like promoteEmployee to find the employees boss and store new hires as boss descendants.
>>>>>>> refs/remotes/origin/master

### Bonus
- **Time Complexity**
- getBoss 0(h)  height of the tree 
- getSubordinates  0(h) height of the tree
- fireEmployee 0(n) 
- hireEmployee 0(1)
- promoteEmployee 0(n)
- demoteEmployee 0(n)

### Bonus
- The demote and promote functions can be merge into one since it only envolves swapping two employees position for one another.

### Running the App
<<<<<<< HEAD
- clone repo and paste in terminal. Open code and use `yarn start` to run the functions.
=======
- clone repo and paste in terminal. Open code and use `yarn start` to run the functions.
>>>>>>> refs/remotes/origin/master
