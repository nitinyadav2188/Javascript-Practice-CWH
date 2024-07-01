let a = prompt("Hey whats your age?");
a=Number.parseInt(a); //converting  the string into number
console.log(typeof a);
if(a<0){
    alert("This is a invalid age.")
}
else if(a<9){
    alert("You are a kid you cannot even think of driving")
}
else if(a<18 && a>=9){
    alert("You are a kid and you can think of driving the car after 18")
}
else{
    alert("You can drive as you are now above 18")
}
console.log("Done")