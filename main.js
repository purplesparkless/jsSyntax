// JavaScript Values
// The JavaScript syntax defines two types of values:
//     Fixed values
//     Variable values
// Fixed values are called Literals.
// Variable values are called Variables.

// JavaScript Literals
// The two most important syntax rules for fixed values are:

// 1. Numbers are written with or without decimals:
10.50
1002
// 2. Strings are text, written within double or single quotes:
"John Doe"
'John Doe' 


// JavaScript Variables
// In a programming language, variables are used to store data values.
// JavaScript uses the keywords var, let and const to declare variables.
// An equal sign is used to assign values to variables.
// In this example, x is defined as a variable. Then, x is assigned (given) the value 6:
let x;
x = 6; 

// JavaScript Operators
// JavaScript uses arithmetic operators ( + - * / ) to compute values: 
// JavaScript uses an assignment operator ( = ) to assign values to variables:
let y;
y = 6; 

// JavaScript Expressions
// An expression is a combination of values, variables, and operators, which computes to a value.
// The computation is called an evaluation.
// For example, 5 * 10 evaluates to 50:
5 * 10

// JavaScript Identifiers / Names
// Identifiers are JavaScript names.
// Identifiers are used to name variables and keywords, and functions.
// The rules for legal names are the same in most programming languages.
// A JavaScript name must begin with:
//     A letter (A-Z or a-z)
//     A dollar sign ($)
//     Or an underscore (_)
// Subsequent characters may be letters, digits, underscores, or dollar signs.

// Numbers are not allowed as the first character in names.
// This way JavaScript can easily distinguish identifiers from numbers.


// JavaScript and Camel Case
// Hyphens are not allowed in JavaScript. They are reserved for subtractions.

// Underscore:
// first_name, last_name, master_card, inter_city.

// Upper Camel Case (Pascal Case):
// FirstName, LastName, MasterCard, InterCity.

// Lower Camel Case:
// JavaScript programmers tend to use camel case that starts with a lowercase letter:

firstName, lastName, masterCard, interCity

// /////////////////////////////////JS VARIABLES
{/* <p id="demo"></p> */}
<script>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script> 

// You can declare many variables in one statement.
let person = "John Doe", carName = "Volvo", price = 200;

// A declaration can span multiple lines: 
let person = "John Doe",
carName = "Volvo",
price = 200;

// You can also add strings, but strings will be concatenated:
let x = "John" + " " + "Doe"; 
let x = "5" + 2 + 3;

// Variables declared inside a { } block cannot be accessed from outside the block:BLOCKSCOPE
// Variables defined with let can not be redeclared in the same scope
{
  let x = 2;
}
// x can NOT be used here 

// Variables declared with varinside a { } block can be accessed from outside the block:GLOBAL SCOPE
// Variables defined with var can be redeclared in the same scope
{
  var x = 2;
}
// x CAN be used here 



// If you add a number and a string, the result will be a string!



