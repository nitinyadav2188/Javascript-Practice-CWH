//declaring class 
class Employee {
    //initializing an object
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //declaring method
    detail() {
        document.writeln(this.id + "" + this.name + "<br>")
    }
}
//passing object to a variable
var e1 = new Employee(101, "Roy");
var e2 = new Employee(102, "Duke");

//calling method
e1.detail();
e2.detail();
