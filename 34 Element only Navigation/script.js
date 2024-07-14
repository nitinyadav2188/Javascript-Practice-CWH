const changeBodyRed =()=>{
document.body.firstChild.style.background="red";
}
changeBodyRed();
let b = document.body;
console.log("First child of b is:" + b.firstChild);
console.log("First Element child of b is:" + b.firstElementChild);