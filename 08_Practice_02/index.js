// Practice Set--->2

// Question--->01 :use logical operators to find whether the age of a person lies between 10 and 20
let age = prompt("What is your age?")
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20");
}
else{
    console.log("Your age does not lies between 10 and 20");
    
}

// Question--->02 :demonstrate the use of switch case statementin js
let age1 = prompt("What is your age?")
switch(age1){
    case 12:
        console.log("Your age is 12")
        case 13:
            console.log("Your age is 13")
            case 14:
                    console.log("Your age is 14")
                    default:
                        console.log("Your age is not special")
}

//Question--->03 :write a js program to find whether a number is divisible by 2 and 3
let num = prompt("What is your number?")
num = Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3")
}
else{
    console.log("Your number is divisible by 2 and 3")
}


//Question--->04 :write a js program to find whether a number is divisible by 2 or 3
let num1 = prompt("What is your number?")
num = Number.parseInt(num1)
if(num1%2==0 || num1%3==0){
    console.log("Your number is divisible by 2 and 3")
}
else{
    console.log("Your number is divisible by 2 and 3")
}

//Question--->05 :print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator
let age2 =19
let a = age2>18? "you can drive" : "you cannot drive"
console.log(a)
