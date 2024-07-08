//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/* Advantage of JavaScript function:-
 There are mainly two advantages of JavaScript functions.
1) Code reusability: We can call a function several times so it save coding.
2) Less coding: It makes our program compact. We don’t need to write many lines of code each time to perform a common task.
*/


function onePlusAvg(x,y){
    console.log("Done!!")
    //return (x+y)/2
    return Math.round((x+y)/2) //--------------->round off me answer aayega
}
//function ko invoke karna jaruri hai usko execute karne ke liye

let a=1;
let b=2;
let c=3;
console.log("Average of a and b are:",onePlusAvg(a,b));
console.log("Average of c and b are:",onePlusAvg(b,c));
console.log("Average of a and c are:",onePlusAvg(a,c));
//console.log("Average of a and b are:",(a+b)/2);


/*arrow function*/
const sum=(p,q)=>{
    return p+q
}
console.log(sum(9,7))
