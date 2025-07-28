/*
13.Explain event delegation and how it works in JavaScript.

->
Event delegation is a technique in JavaScript that allows you to handle events at a higher level in the DOM rather than attaching event listeners to individual elements. This is particularly useful for dynamically added elements or when you have many similar elements that require the same event handling logic.

How it works:
1. **Event Bubbling**: When an event occurs on an element, it first triggers on that element and then bubbles up to its parent elements. This means that the event can be captured by any ancestor element.

2. **Single Event Listener**: Instead of attaching an event listener to each individual element, you can attach a single event listener to a common ancestor. This ancestor will listen for events that bubble up from its child elements.

3. **Event Targeting**: Inside the event handler, you can determine which child element triggered the event by using the `event.target` property. This allows you to handle events for specific child elements based on their attributes or classes.

4. **Performance**: Event delegation can improve performance by reducing the number of event listeners in the DOM, especially when dealing with a large number of elements.

*/

document.getElementById("parent").addEventListener("click", function (e) {
  if (e.target && e.target.matches(".child")) {
    console.log("Child element clicked:", e.target);
  }
});
