// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "null";
// Try changing to "hello", 10, null, NaN
if (typeof userInput === "number" && !isNaN(userInput)) {
    console.log("It's a number");
} else {
    console.log("It's not a number");
}

// ANS in class

if (typeof userInput === 'number' && !isNaN(userInput)){
    console.log(`T :${userInput} <- This is Number`);
}else{
    console.log(`F :${userInput} <-This is not number /is NaN`);
}