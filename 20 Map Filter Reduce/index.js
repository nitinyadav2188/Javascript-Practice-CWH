/*~~~~~~~~~~~~~~~~~~~~~~~~~~~ Map Filter & Reduce ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let arr1=[45,23,21]
//Array Map Method
let a=arr1.map((value,index,array)=>{
    console.log(value,index,array)
    return value+1
})
console.log(a)

//Array Filter Method
let arr2=[45,23,21,0,3,5]
let a2=arr2.filter((a)=>{
    return a<10
})
console.log(a2)

//Array Reduce Method
let arr3=[1,2,3,4,5]
let a3=arr3.reduce((h1,h2)=>{   
    return h1+h2   //1+2=3---->(1+2)+3=6---->(1+2+3)+4=10---->(1+2+3+4)+5=15
})
console.log(a3)
