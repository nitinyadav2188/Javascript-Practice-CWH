/*Exception Handling in JavaScript:--------->
 An exception signifies the presence of an abnormal condition which requires special operable techniques.*/

/*In exception handling:-------->
A throw statement is used to raise an exception. It means when an abnormal condition occurs, an exception is thrown using throw.*/


/* Types of Errors:------>
1)Syntax Error: When a user makes a mistake in the pre-defined syntax of a programming language, a syntax error may appear.
2)Runtime Error: When an error occurs during the execution of the program, such an error is known as Runtime error. The codes which create runtime errors are known as Exceptions. Thus, exception handlers are used for handling runtime errors.
3)Logical Error: An error which occurs when there is any logical mistake in the program that may not produce the desired output, and may terminate abnormally. Such an error is known as Logical error.*/

/* Error Object:------>
When a runtime error occurs, it creates and throws an Error object.
An error object has two properties:
1)name: This is an object property that sets or returns an error name.
2)message: This property returns an error message in the string form.*/

/* Although Error is a generic constructor, there are following standard built-in error types or error constructors beside it:
 1)EvalError: It creates an instance for the error that occurred in the eval(), which is a global function used for evaluating the js string code.
 2)InternalError: It creates an instance when the js engine throws an internal error.
 3)RangeError: It creates an instance for the error that occurs when a numeric variable or parameter is out of its valid range.
 4)ReferenceError: It creates an instance for the error that occurs when an invalid reference is de-referenced.
 5)SyntaxError: An instance is created for the syntax error that may occur while parsing the eval().
 6)TypeError: When a variable is not a valid type, an instance is created for such an error.
 7)URIError: An instance is created for the error that occurs when invalid parameters are passed in encodeURI() or decodeURI().*/


/* Exception Handling Statements:-------------->
 There are following statements that handle if any exception occurs:
 *throw statements
 *try…catch statements
 *try…catch…finally statements.*/







