//--PRIMITIVE DATATYPE--->
//The predefined data types provided by JavaScript language are known as primitive data types
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


/*~~~~~~~Non-Primitive Data Types:--------->
The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.*/

//--OBJECTS in JS--
const item={
    "nitin": true,
    "sandeep": false,
    "ritik": true,
    "niraj": undefined
}
console.log(item["nitin"])
console.log(item["jkl"]) //if not in the list 