/*~~~~~ALERT CONFIRM PROMPT~~~~~*/
alert("Enter value of a?")

let a=prompt("Enter here:","578")
document.write(a)
a=Number.parseInt(a)
alert("You have entered a of type"+(typeof a)) //alert hamesa as a string value ko leta hai

let write=confirm("Do you want to write it to the page?")
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write......")
}

