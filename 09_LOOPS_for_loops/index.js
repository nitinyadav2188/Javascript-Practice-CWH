//for loop in js---------->The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known.  
for(let i=0;i<5;i++){
    console.log(i)
}

let obj ={
    harry:90,
    shubh:86,
    shiv:80
}
//for-in loop----------->The JavaScript for in loop is used to iterate the properties of an object.
for (let a in obj){
    console.log("Marks of" + a + "are:" + obj[a])
}
//for-of loop------------>
for(let b of "Nitin"){
    console.log(b)
}
