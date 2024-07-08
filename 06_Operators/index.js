// OPERATORS AND EXPRESSIONS:

//arithmetic operators--->Arithmetic operators are used to perform arithmetic operations on the operands
console.log("Operators in js");
let a=45;
let b=4;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a**b=",a**b); //power ka kaam karega
console.log("a%b=",a%b);  // modulus 
console.log("a++=",a++);  // increment operator 
console.log("a=",a);   
console.log("++a=",++a); //pahle hi add kardega a ki value me +1 uske baad print karega  
console.log("a=",a);   
console.log("a--=",a--);  // decrement operator

//assignment operator--->
let assgn=1;
assgn +=5;  //assgn= assgn+5 =6
console.log(assgn);

//Comparison operators--->The JavaScript comparison operator compares the two operand
let c1=2;
let c2=3;
console.log("c1==c2",c1==c2);
console.log("c1!=c2",c1!=c2);
console.log("c1===c2",c1===c2); //isme datatype bhi same hona chahiye value k sath-sath
console.log("c1!==c2",c1!==c2);
console.log("c1>c2",c1>c2); //greater than 
console.log("c1<c2",c1<c2); //smaller than

//Logical operators--->
let x=5;
let y=6;
console.log(x<y && x==5) // t.t=t  (AND)
console.log(x>y || x==5) // f+t=t  (OR)
console.log(!false)
console.log(!true)
