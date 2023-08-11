// part 1
true
true
true
true
false
true
true 


// part 2 (a)
let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}


// (b)
let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if(firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if(firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");

}


// part 3 (1)

if (Math.random > 0.5) {
    console.log("over 0.5")
} else {
    console.log("under 0.5")
}