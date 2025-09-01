1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:getElementById is used on only a specific id, getElementsByClassName also works one a specific class name but can be used on multiple elements.querySelector returns only a single element unlike  querySelectorAll which returns multiple or a collection of elements.

2.How do you create and insert a new element into the DOM?

Ans: To create a new element you use document.createElement() and to insert it use append() or appendChild().

3.What is Event Bubbling and how does it work?

Ans: Event Bubbling is DOM mechanism where if a event is triggered
 it climbs upwards through it parent tag to reach the main document tag
 
4.What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation is an easy way to attach a single parent element of many child element instead of adding event listener to every single child.It,s useful cause you can use only one event delegation to add multiple child tag through a parent tag.

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:preventDefault()  is to stop a default action like not letting you click a default link.On the other hand stopPropagation() is used to stop a event from bubbling up.