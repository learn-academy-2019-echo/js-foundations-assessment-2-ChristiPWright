# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.
Nothing.


1b. Test the function. Explain why the function returned what it did.

  Your answer: The function is never called with an input.

  Researched answer: The variable text that is being called by the console.log(text) is the local variable text dues to hoisting; however, that variable at the time the console.log is called has no defined value.
  https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1


2. What is JSON?

  Your answer: JavaScript Object Notation, a way of storing data in the program.

  Researched answer: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
  https://www.json.org/

3. What does CRUD stand for?

  Your answer: Create, Read, Update, Delete

  Researched answer: Any model, API, website should be able to do the above actions. 
https://www.codecademy.com/articles/what-is-crud


4. What does are the 5 HTTP verbs?

  Your answer: Get, Post, Put, Patch, Delete

  Researched answer: Get, Post, Put, Patch, Delete as well as a couple others define a set of request methods that tell what you want to do. 
  https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods



5. What is a higher-order function?

  Your answer: A function that calls a function. 

  Researched answer: Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. They help make your code more readable and effiecient. 
https://eloquentjavascript.net/05_higher_order.html

6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer:

  Researched answer:
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
https://medium.com/beginners-guide-to-mobile-web-development/closures-in-functional-programming-and-javascript-3ed730e08fc2
7. STRETCH: What is an API?

  Your answer: A hook on a website that you can link to other things.

  Researched answer:
https://medium.com/@perrysetgo/what-exactly-is-an-api-69f36968a41f

### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?
Favorite Food, if you could have a superpower what would it be


2. What was your favorite topic this week?



3. What was your "A-ha!" moment this week?
This morning explaining higher order functions to my housemate helped me realize where I'd bee going wrong when trying to write complex conditional logic in my higher order functions. 