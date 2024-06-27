/*Question-01--->create an array of numbers and take input from the user to add numbers to this array*/
let arr=[1,2,3,4,5,6,7,8]
let a=prompt("Enter a number")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)

/*Question-02--->keep adding numbers to the array in Question 1 until 0 is added to he array*/
let arr1=[1,2,3,4,5,6,7,8]
do {
    a1=prompt("Enter a number")
    a1=Number.parseInt(a1)
    arr1.push(a1)
    console.log(arr1)
}while(a1!=0)

/*Question-03--->filter for numbers divisible by 10 from a given number*/
let arr2=[10,23,30,45,58,60,76,80]
let n=arr2.filter((x)=>{
    return x%10==0
})
console.log(n)

/*Question-04--->create an array of square of given numbers*/
let arr3=[1,2,3,4,5,6,7,8]
let sq=arr2.map((x)=>{
    return x*x
})
console.log(sq)


/*Question-05--->use reduce to calculate factorial of a given number from an array of first n natural numbers ( n being the number whose factorial needs to be calculated)*/
let arr4=[1,2,3,4,5,6,7,8]
let fact=arr2.reduce((x1,x2)=>{
    return x1*x2
})
console.log(fact)
