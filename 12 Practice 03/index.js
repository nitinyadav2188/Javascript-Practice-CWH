let marks={
    harry:90,
    shubham:80,
    monika:48,
    lovish:56
}
//Question-01 ----->write a program to print the marks of a student in an object using for loop
                    // obj={harry:90,shubham:80,monika:48,lovish:56}
for(let i=0;i<Object.keys(marks).length;i++){
console.log("The marks of" + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}
console.log("--------------------------------------------------------------------------------------")
//Question-02 ----->write the program in Q1 using for in loop
for(let key in marks){
    //console.log(key)
    console.log("The marks of" + key + "are" + marks[key])
}
console.log("--------------------------------------------------------------------------------------")
//Question-03 ------>write a program to print "Try Again" until the user enters the correct number?
let cn =43
let i
while(i != cn){
    console.log("Try Again-->")
    i=prompt("enter a number")
}
console.log("you have a entered a correct number")
console.log("--------------------------------------------------------------------------------------")

//Question-04 ------>write a program to find mean of 4 numbers
const mean =(a,b,c,d)=>{
    return (a+b+c+d)/4;
}
console.log(mean(4,5,6,7))
