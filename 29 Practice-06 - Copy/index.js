/*Question-01--->write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!*/
let runAgain = true;
const canDrive = (age) => {         //function to check if user is eligible or not.......
    return age >= 18 ? true : false
}
while (runAgain) {
    let age = prompt("Enter your age") //input le rha hai user se.....
    age = Number.parseInt(age) //usko number me convert kr raha hai...
    if (age < 0) {
        console.log("Please enter the valid age") //if someone enters negative age....
        break;
    }
    if (canDrive(age)) {
        alert("Yes,you can drive")
    }
    else {
        alert("You cannot drive")
    }
    runAgain = confirm("Do you want to play again?") //asking for confirmation...... 
}

/*Question-02--->in Question-01 use confirm to ask the user if he wants to set the prompt again */
/*Question-03--->in the previous question,use console.log to log the error if the age entered is negative*/


/*Question-04--->write a program to change the url to google.com if users enters a number greater than 4*/
let number = prompt("Enter your number") //input le rha hai user se.....
number = Number.parseInt(number) //usko number me convert kr raha hai...
if (number > 4) {
    location.href = "https://google.com"
}


/*Question-05--->change the background of the page to yellow,red or any color based on user input through prompt*/
let color = prompt("Enter the page background color?")
document.body.style.background = color