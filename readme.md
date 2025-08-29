Question No 1:
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer No 1: 
Difference between getElementById and getElementsByClassName are:

getElementById find out only one element and return with the specific id, on the otherhand getElementsByClassName is brings all elements that have the given class name. So, to get a single element we use getElementById and for multiple we will use getElementsByClassName.

Difference between querySelector and querySelectorAll:

querySelector brings the first matching element and return but querySelectorAll bring all matching 

Question No 2:
How do you create and insert a new element into the DOM?

Answer No 2:
To create and insert a new element into the DOM, 

First of all, I have to create a new element with createElement('........). 

Secondly, add a content or attributes for example:
newElement.textContent = "This is a paragraph";
newElement.className = "paragraph title";

And Finally, insert into the DOM with appendChild(newElement);

Question No 3:
What is Event Bubbling and how does it work?

Answer No 3: 
Event bubbling is a type of DOM event process where an event start from the core element  and move up to its parent or grandparent.  It works by first triggering the event on the target element, and then the event moves upward through its parent elements, all the way up to the html element. Each parent can handle the event if it has an event listener.

Question No 4:
What is Event Delegation in JavaScript? Why is it useful?

Answer No 4:
Event Delegation is a javascript process where you can use only one event to the common parent without use multiple child elements. The parent listens for events that bubble up from its children and then determines which child triggered the event. 

Event Delegation is useful because it saves memory, works with dynamic elements, keeps code simple, and improves performance.

Question No 5: 
What is the difference between preventDefault() and stopPropagation() methods?

Answer No 5:
difference between preventDefault() and stopPropagation() methods:

preventDefault() Stops the element’s default action (like link navigation or form submission).

stopPropagation()Stops the event from bubbling up to parent elements.

