# Flappy Bird

## Live can be found here: https://codesandbox.io/s/flappy-bird-xdmvys

## Something I learned:

- [Element: getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect): return an object providing the size information of the element and its position related to the viewpoint. The oject includes such as top, left, right, width, and height. In this project, we use the method to check if the birdRect collide with the pipes by comparing their top, left, bottom, and right value.

- [Array.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap): flatMap return a new array. Each element in "Array" is applied to the callback function and is flattening (reduce the dimension of array). 

- [Document: documentElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement):return the root element.

- Difference between append and appendChild: append can append node object and text, but appendChild only accept node object. append is an element method, appendChild is an node method.

