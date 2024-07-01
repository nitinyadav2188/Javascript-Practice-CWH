let num6=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<num6.length;i++){
    console.log(num6[i])
}
//square print karne ke liye
//forEach loop
num6.forEach((element)=> {
    console.log(element*element)
})

//Array.from
let name="Harry"
let arr=Array.from(name)
console.log(arr)

//for...of
for(let i of num6){
    console.log(i)
}

//for...in----
for(let i in num6){
    console.log(i)//--->keys deta hai output me
    console.log(num6[i])
}