let x = 700;
alert("x = " + x);

y = 373;
console.log("y - x = " + (y - x) )

console.log("4 ** 3 =  " + (4**3) )

let int = 5;
let string = "7";
let compine = int + string;
//compining diffrent types converted to string
console.log("compine = " + compine);
console.log("typeof compine ->"+typeof compine);

console.log("compining '1' + 2 + 2 = " + ('1'+2+2));
//Treated from the first element string --> moving as string

// * & / if deffrent used compiler converts string to number

let apples = '2', oranges = '3';

//Using of unary plus
console.log("apples + oranges = " + (apples + oranges));
console.log("+apples + +oranges = " + (+apples + +oranges));

///////// One line does multiple things – not good. /////////
///////// one line – one action /////////

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert("a + b = "+ (+a + +b));
