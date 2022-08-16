let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1

console.log(array1[2]);

// print the last element in array1

console.log(array1[5]);

// add 16 and 3 to array1

array1.push('16', '3');
console.log(array1)

// sort the array, then print the 3rd element again

array1.sort();
console.log(array1);

// did it change?

//yes it changed. [1, 10, 14, 16, 3, 5, 6, 9]

// create a variable called myTodoList that holds an empty array

 let husband1ToDoList = []

// add three todo items to the array using a built-in array method

myToDoList.push('laundry', 'grocery shopping', 'walk the dogs');
console.log(myToDoList);

// remove the second item in the array

myToDoList.splice(0,1);
console.log(myToDoList);

// create another array, yourTodoList, and add two todo items

let husband2TodoList = [];

yourTodoList.push('mow the lawn', 'shovel the driveway');
console.log(yourTodoList);

// create another array, ourTodoList

let coupleTodoList = [];

// combine myTodoList and yourTodoList into ourTodoList

let husband1ToDoList = ['laundry', 'grocery shopping', 'walk the dogs'];
let husband2TodoList = ['mow the lawn', 'shovel the driveway'];
let coupleToDoList = coupleToDoList.concat(yourTodoList);


// sort the following array from Z-A

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed


// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed



// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin
