//--PRIMITIVE DATATYPE--
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
let h; //also undefined datatype
console.log(a,b,c,d,e,f,g)

console.log(typeof f); 
console.log(typeof c); 
console.log(typeof h); 

//--OBJECTS in JS--
const item={
    "nitin": true,
    "sandeep": false,
    "ritik": true,
    "niraj": undefined
}
console.log(item["nitin"])
console.log(item["jkl"]) //if not in the list 