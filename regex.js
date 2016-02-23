// Regular expression to test URL
var urlRegex = new RegExp("^(https?:\/\/)?([\da-z0-9\.-]+)\.([a-z\.]{2,})([/\w#!\.-?]*)*\/?$");
var test = urlRegex.exec("http:www.example.com/#1234"); // Returns array
var test2 = urlRegex.test("https:www.example.com/#1234"); // Returns boolean
console.log(test);
console.log(test2);
