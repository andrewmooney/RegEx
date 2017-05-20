// Regular expression to test URL
var urlRegex = new RegExp("^(https?:\/\/)?([\da-z0-9\.-]+)\.([a-z\.]{2,})([/\w#!\.-?]*)*\/?$");
var test = urlRegex.exec("http:www.example.com/#1234"); // Returns array
var test2 = urlRegex.test("https:www.example.com/#1234"); // Returns boolean
console.log(test);
console.log(test2);

// Regular expression to test if a password includes at least one capital letter, lowercase letter, number and symbol.
let passwordRegex = new RegExp("(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#£$%^&*-_=+\:;])(?=.{8,})");
const test3 = passwordRegex.test("Ab1$"); // Returns true
const test4 = passwordRegex.test("Ab1"); // Returns false
