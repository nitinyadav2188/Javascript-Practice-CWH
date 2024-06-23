// Question-1 :create a variable of type string and try to add a numbere to it
let a = "NITIN";
let b = 6;
console.log(a+b);

//Question-2 :use typeof operator to find the datatype of the string in the last question
console.log(typeof a+b);

//Question-3 :create a const object in javascript. Can you change it to hold a number later?
const a1 = {
    name: 'nitin',
    section:1,
    isPrinciple: false
}
//a1=45; -----> no,not possible
a1['friend']= "yadav";

//QUESTION-4 :try to add a new key to the const object in problem 3.Were you able to do it?
a1['name']= "NITIN";
console.log(a1);

//Question-5 :Write a JS program to create a word-meaning dictionary of 3 words.
const dict={
    appreciate:"recognize the full worth",
    ataraxia:"a state of freedom from emotional disturbance and anxiety",
    yakka:"hardwork"
}
//console.log(dict.yakka)
console.log(dict['yakkka'])
