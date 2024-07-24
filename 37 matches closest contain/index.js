
let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
/* Matches():--->The matches() method of the Element interface tests whether the element would be selected by the specified CSS selector.
               true if the Element matches the selectors. Otherwise, false.
*/
console.log(id1.matches(".class"))    //false kyuki class ka asli naam box hai n ki class
console.log(id1.matches(".box"))      //true

/* Closest()----->The closest() method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.
                  The closest ancestor Element or itself, which matches the selectors. If there are no such element, null.                 
*/
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))       //true
console.log(sp1.contains(sp1))       //true

