//change card title to red:
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color ="blue"


let ctitle = document.querySelectorAll(".card-title")
ctitle[0].style.color="red"
ctitle[1].style.color="blue"
ctitle[2].style.color="green"
console.log(ctitle)

// The selector methods accept selectors to determine what element or elements should be returned.

/* Element.querySelector() method:--->
The querySelector() method of the Element interface returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors.



*/