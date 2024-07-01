/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ARRAYS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let marks_class_12 = [91, 82, 83, 64, 95, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[5])
console.log(marks_class_12[7])//will be undefined bcz index 7 does not exist
marks_class_12[7] = 69 //adding a value to the array
marks_class_12[0] = 96 //changing the value of a array
console.log(marks_class_12)
console.log("Length is:", marks_class_12.length)

//~~~~Methods of Array~~~~~~~~~>>>>>

let num = [1, 2, 3, 4]

//toString()------>converts to string
let b = num.toString() //b is now a string
console.log(b)
console.log(typeof b)

//join()
let c = num.join("_")
console.log(c)
console.log(typeof c)

//pop()------>removes last element from the array
num.pop()
console.log(num)
let r = num.pop()/*pop returns the popped value*/
console.log(num, r)

//push()------>adds element in the last of the array
num.push(45)
console.log(num)

//shift()----->removes element from the starting of the array
let s = num.shift()
console.log(num)

//unshift()------>adds element in the starting of the array
let u = num.unshift(90)
console.log(num)

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(num1.length)
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19]

//delete
delete num1[0]
console.log(num1)
console.log(num1.length)

//concat()------>merges all the arrays
let newArray = num1.concat(num2)
console.log(newArray)

//sort()------>modifies the original array
let compare=(a,b)=>{
    return b-a
}
let x = [15, 44, 35, 78, 69]
//x.sort()---- ascending order me sort karne k liye
x.sort(compare)/*descending order me sort karne k liye*/
console.log(x)

//reverse()
x.reverse()

//splice and slice------------------>
let q =[1,2,3,4,5,6,7,8,9,0]
q.splice(2,3,3002,3004,3006)
console.log(q)
//console.log(deletedValues)----->deleted values jo delete hui hai(object type hai)
let newNum=q.slice(3)
console.log(newNum)
let newNum1=q.slice(3,6)
console.log(newNum1)
