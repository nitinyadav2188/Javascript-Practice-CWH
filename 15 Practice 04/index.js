//Problem-01--->what will the following print in javascript?
                //console.log("har\"".length)
console.log("har\"".length)

//Problem-03--->write a program to convert a given string to lowercase
let nm="NITIN"
console.log(nm.toLowerCase())

//Problem-04--->extract the amount out of this string "Please give Rs 1000"
let str2="Please give Rs 1000"
let amount = Number.parseInt(str2.slice("Please give Rs ".length))
console.log(amount)
console.log(typeof amount)

//Problem-05--->try to change the fourth character of a string.Were you able to do it?
let friend="Deepika"
friend[3]="R"
console.log(friend) //friend is not changrd bcz string is immutable

