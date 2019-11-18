---
path: "/introduction-to-hooks"
date: "2019-05-1"
title: "Introduction to Hooks"
content: "This post is an introduction to React Hooks"
image: undraw_task_31wc.png
author: "Ana Mafla"
---

React Hooks is a functionality added in React 16.8, that allow you use state and another React features in function components, something than before was exclusive of class components.

## 1. Why use React Hooks?

In React documentation we can find the advantages, basically Hooks allow you:

- Reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
- Split one component into smaller functions based on what pieces are related, rather than forcing a split based on lifecycle methods.
- Use more of React’s features without classes.

With React hooks, we can reproduce the behavior we’re used to in “component classes” in functional components:

| Class Component                                                             | Functional component with Hooks                  |
| --------------------------------------------------------------------------- | ------------------------------------------------ |
| Maintain `state`                                                            | Component state uses the `useState()` hook       |
| Use lifecycle methods like `componentDidMount()` and `componentDidUpdate()` | Use the `useEffect()` hook.                      |
| Access context (by setting `contextType`)                                   | Static contextType uses the `useContext()` hook. |

<br/>

## 2. What are React Hooks?

Hooks are functions with names starting with `use` , that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes.

Function components in React look like this:

```
const App = () => {
   // You can use Hooks here!
   return <div />
   }
```

Or this:

```
function App() {
   // You can use Hooks here!
   return <div />;
   }
```

React provides a built-in hooks :

#### Basic Hooks

- useState
- useEffect
- useContext

#### Additional Hooks

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

But the most important is that you can also create your own Hooks to reuse stateful behavior between different components.

## 3. useState and useEffect

We are going to focus in the most basic hooks: useState and useEffect

For that, we are going to build a simple app that ask you your mood today and give you a message according with your mood.

<p align="center">
<img width=100% src="https://media.giphy.com/media/jxd9pM1TS8FWyBK2fW/giphy.gif" alt="demo mood app" />
</p>

### useState

useState is a Hook, that we call it inside a function component to add some local state to it.

For use it, first we need to import the `useState` Hook from React:

```
import React, { useState } from 'react';

function App () {
  const [ mood, setMood] = useState("happy");
}
```

It is basically a function, where the only argument is the initial state and that returns an array. This array contains the current state value and a function that lets you update it.

In our example, we are initializing `mood` with “happy”

You can use more than once in a single component.
The array destructuring syntax let us give different names to the state variables we declared by calling useState.

```
function App () {
const [ mood, setMood] = useState("happy");
const [ message, setMessage] = useState("Share your joy with others  💃 🎉🕺");
}
```

Now, for read the state, we use `mood` and `message`:

`<p> {message}</p>`

And for updating state, we use `setMood` and `setMessage`:

```
setMood('Sad');
setMessage(“"Listen to your favorite song 🎧 🎼");
```

In our App, we are going to write a function `handleMood`, that is going to be triggered when the user makes click in the emoticon button, and then our mood is going to be updated it according to `moods` data.

```
const moods  = [{mood: "happy", message: "Share your joy with others  💃🎉🕺", emoticon: "😁"},
     {mood: "angry", message:"Relax...just breathe 🧘🏽‍♀️🧘🏻‍♂️", emoticon: "😠"},
     {mood: "sad",   message:"Listen to your favorite song  🎧 🎼", emoticon: "😢"},
     {mood:"bored", message: "Read a book, Go for a walk 🏃🏻‍♀️📕  📖", emoticon: "😒"}]


  const handleMood = (e) =>{
    setMood(e.target.value);
  }


```

The state update using the updater provided by `useState` hook is asynchronous, and will not immediately reflect and update but will trigger a re-render. If we want to perform an action on state update, we need to use the `useEffect` hook, much like using `componentDidUpdate` in class components. And that is what we need in our app, when the user click in his mood, immediately show him the according message.

### useEffect

useEffect let us perform side effect. It’s a function that accept an anonymous function as a first argument :

`useEffect(effect-function)`

Using this hook, we are telling to React that our component need to do something after render. React will remember the function we passed (“effect-function”), and call it later after performing the DOM updates. We need to place our action in the useEffect function

```
useEffect(() => {
    setMessage(moods.filter( item => item.mood === mood)[0].message)
  });
```

By default useEffect will be called on every render, but we can pass a second argument that is the array of values that the effect depends on in function components. Then we will only re-run the effect when one of those values changes.

If we pass an empty array as the second argument, that is us telling React that we only want to call this effect when the component is mounted.

`useEffect( effect-function, [])`

In our case , we need to set the message only when the mood change

```
useEffect(() => {
    setMessage(moods.filter( item => item.mood === mood)[0].message)
  }, [mood]);

```

Here is finally our function component App:

```
function App () {

  const [ mood, setMood] = useState("");
  const [ message, setMessage] = useState("");

  const moods  = [
                  {mood:"happy", message: "Share your joy with others 💃 🎉🕺", emoticon: "😁"},
                  {mood:"angry", message:"Relax...just breathe 🧘🏽‍♀️🧘🏻‍♂️", emoticon: "😠"},
                  {mood:"sad", message:"Listen to your favorite song  🎧 🎼", emoticon: "😢" },
                  {mood:"bored", message: "Read a book, Go for a walk 🏃🏻‍♀️📕  📖", emoticon: "😒"}]


  const handleMood = (e) =>{
    setMood(e.target.value);
  }

  useEffect(() => {
   if (mood.length > 0) {
    setMessage(moods.filter( item => item.mood === mood)[0].message)
    }
  }, [mood]);

  return(
   <div>
    <h1>What is your mood today?</h1>
      <div>
         {moods.map( item =>
           <button onClick={handleMood} value={item.mood} className="mood">{item.emoticon} </button>
          )}
      </div>
      <p> {message} </p>
    </div>
  )
}
```

https://codepen.io/ANAMAFLA/pen/XwpOKb

I hope this introduccion to hooks can be useful for you
