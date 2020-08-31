---
path: "/understanding-react"
date: "2020-09-1"
title: "Understanding React"
content: "This post is to understand a little what we are doing when we are coding a React application"
image: react_box.png
author: "Ana Mafla"
keywords:
  - "react"
  - "JSX"
  - "Virtual DOM"
---

Have you ever had a moment looking at things and wonder: how anything actually works?. You have probably used React, but have you ever stopped to check the source code of React?

Web Frameworks and libraries, like React, expose an API which helps you structure your code and abstract away some of the Web APIs. Abstraction is great, helping us focus on the problem we want to solve, and not on the implementation details. However, abstraction has a price, we can no longer be certain what is going on behind the scenes.

Sometimes I forget that React is actually just JavaScript. The idea of this post is to understand a little about what we are doing when we are coding a React application, and let it become a reminder that we are only working with objects in Javascript.

React is not a black box, you can open that box and you will get a better sense of what React it’s doing.

##Decomposing the components

React is a component-based library for building user interfaces. Components let you split the UI into independent and reusable pieces.

In a React application a component look like this:

```
 function Button () {
   return(
     <button onClick={() => alert("You clicked me!")}>
        Start
     </button>)
}
```

A Component is a function which optionally accepts a single “props” (which stands for properties) object argument with data and returns a React element. Those components are known as "functional components" because they are literally JavaScript functions.

This función is using JSX, a shorthand for JavaScript XML, this Javascript extension allows us to write JavaScript that looks like HTML. Because JSX is JavaScript, we can’t use Javascript reserved words, this includes words like `class` and `for`. React gives us the attribute `className`.

JSX is always going to be transpiled into a `React.createElement()` method with the help of [Babel](https://babeljs.io/) compiler. While JSX looks like HTML, it is actually just an easy way to write a `React.createElement()` declaration.

```
function Button() {
  return React.createElement(
   "button", // type
   {onClick: function onClick() {
     return alert("You clicked me!"); }},//props
   "Start" //children
 );
}
```

`React.createElement(type,[props],[...children])` method takes these three arguments:

- type: Type of the html element or component (example : h1,div,p,button, etc).
- props: The properties object (example: {style: { color: “blue” }} or className or event handlers etc).
- children: anything you need to pass between the dom elements.

But what is createElement?. Fortunately, React is an open-source JavaScript library and you can access its source code in its GitHub repo. We can explore this method in the source of [React](https://github.com/facebook/react/blob/master/packages/react/src/ReactElement.js)

We can see that createElement, is returning the function ReactElement:

```
export function createElement(type, config, children) {

 let propName;

 // Reserved names are extracted

 const props = {};
 let key = null;
 let ref = null;
 let self = null;
 let source = null;

.
.
.

return ReactElement(
   type,
   key,
   ref,
   self,
   source,
   ReactCurrentOwner.current,
   props,
 );
}
```

And when we explore `ReactElement`, we can see it’s returning the element object.

```
const ReactElement = function(type, key, ref, self, source, owner, props) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };

  .
  .
  .

  return element;
};
```

`React.createElement()` performs a few checks to help you write bug-free code, but essentially it creates an object with these properties:

- type
- key
- ref
- props

Returning to our example of the button. The `createElement` invocation is going to return this object:

```
{
     type: ‘button’,
     key: null,
     props: {
         children: “Start”
         onClick: () => {alert(“You clicked me!”)},
     ref: null
}
```

The react magic comes from these properties. A React Element is what gets returned from components, it’s an object that virtually describes the DOM nodes that a component represents. React reads these objects and uses them to construct the DOM and keep it up to date.

##The React Magic: Elements, Virtual DOM and Real DOM

To render React to the DOM, we need to use ReactDOM.render():

```
ReactDOM.render(
   <Button /> ,
 document.getElementById("root")
);
```

`ReactDom.render` method accepts two arguments: the first argument is which component or element needs to render in the DOM, and the second argument is where to render in the DOM.
Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

The idea behind React is we create React element objects that represent HTML elements, these don't actually live on the page, they're just objects that describe HTML elements. But then, we can tell React to look at our element objects, and use them to create real HTML elements on the page, or, on the DOM.

We will have a virtual DOM in React and the real DOM on the page. When we change some data on a React element object, React will update the corresponding DOM element automatically.

This post is about a small part of what is inside the React box, there are many more things to explore, but the idea is to make a first approach to the source code of react. I advise this [talk](https://www.youtube.com/watch?v=r33EWrP5EL4) by Jennifer Wong for more on exploring the React repository.

I highly encourage everyone to just dig into these internals of React, and you’ll get a better sense of what React it’s doing. This knowledge will lead to a better understanding of the code, will allow us to improve the debugging and be more productive.
