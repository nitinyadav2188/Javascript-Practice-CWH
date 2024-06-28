console.log("Hiii......")//output of message to the console
console.error("Hey this is a error")//used to show errors
console.assert(5>53)
console.clear//used to clear the console
obj={a:1,b:2,c:3,d:4}
console.table(obj)// used to dispaly data in tabular format
console.warn("Don't drink and drive")//used for warnings
console.info("this is an imp info")//used for special information

console.time("a")
console.timeEnd("a")

//time taken by for loop to run
console.time("for")
for(let i=0;i<5;i++){
    console.log(108)
}
console.timeEnd("for")

//time taken by while loop to run
console.time("while")
let i=0
while(i<5){
    console.log(108)
    i++;
}
console.timeEnd("while")