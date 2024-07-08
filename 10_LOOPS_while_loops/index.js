//while loop:-------->The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known.
let n = prompt("Enter the value of n:")
n = Number.parseInt(n)

let i=0;                   //output: 0 1 2 
while(i<n){
    console.log(i);
     i++; // agar i++ nhi lagayenge toh 0 infinite tk print hota rahega
}
//if we write (true) instead of (i<n) code will execute endlessly


//do-while loop:-------->The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is executed at least once whether condition is true or false.
let m = prompt("Enter the value of n:")
n = Number.parseInt(m)

let j=10;   //kaam se kaam ek baar execute hota hai
do{
    console.log(j)
    j++;
}while(j<m)
