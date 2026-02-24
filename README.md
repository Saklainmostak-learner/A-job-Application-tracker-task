1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 
Answer-  getElementById() is used to find a specific element in code by a specific ID name. As though id is a unique name, that's why  getElementById returns a single element.
getElementsByClassName() is used to find a specific element in code by its class name. A class name can be used in defferent place in the code, so getElementByClassName can return a collection of HTML.
querySelector() is used for CSS to find a matching element. The first matching element can be found by querySelector().
querySelectorAll() is used to find all matching elements.

2. How do you create and insert a new element into the DOM?
   
Answer: First document.createElement() is used to create a new element in the DOM. if need to add text or an attribute in the DOM,  we need to use methods such as appendChild(), append(), and prepend().

3. What is Event Bubbling? And how does it work?

 Answer: Event Bubbling is a process where an event  proceeds in a child element,  then it go for the parent elements. "body>section>button"  in this example, event bubbling firstly works at the button, then it go for section, and then the body.

 4. What is Event Delegation in JavaScript? Why is it useful?

Answer: We can use the Event Delegation method in the parent Element to use less code, better performance, and work in dynamic elements  without using extra addEventListener() in the child element. 

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() is used to stop default behaviour in elements. and stopPropagation() is used to stop event bubbling.
