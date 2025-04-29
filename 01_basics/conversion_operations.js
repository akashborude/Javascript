let score = "33abc";

console.log(typeof score)
let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber)


/*
output will be :
string -> line no 3
number -> line no 6
NaN -> line no 7 (NaN -> Not a Number)
we can convert a type of string into number but if number and string together 
then the output will be NaN
*/