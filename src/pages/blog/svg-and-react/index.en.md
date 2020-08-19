---
path: "/svg-and-react"
date: "2020-08-20"
title: "SVG and React"
content: "This post is about how to use SVGs in React"
image: undraw_smiley_face_lmgm.png
author: "Ana Mafla"
---

SVG is used to define vector based graphics for the web. It's a Web standard for describing images that can be rendered cleanly at any size and are designed specifically to work well with other web standards, including JavaScript, DOM, CSS and HTML.

SVG is a graphic format that most closely meets current web development demands of scalability, responsiveness, interactivity, performance and accessibility.

If you are interested in an introduction to SVG, take a look to my previous blog post: Getting started with SVG

The next question when you start to learn about SVG and the great things that are possible with this format of image is: how can I use the flexibility and versatility of SVG in my react projects?

In this post we are going to include a simple SVG graphic and animate it with React.

## How to include SVG in a React application

We have two ways to use the SVG in a React application:

### a. Import the SVG as a React Component.

SVG can be imported and used directly as a React Component. This way is perfect for simple animations and styling with CSS and it's easy to update the SVG .

```
import { ReactComponent as Face} from “./face.svg”;

const Smiley= ( ) => ( <Face/>);
```

### b. Transform the SVG into JSX

Basically copying and pasting the content of the .svg file into our react code. This way allows us to make use of props, state and event handlers, although it is more complex to update the SVG.

We are going to use the second way. Let’s take the SVG in the code above and turn it into a React component.

```
const Face = () => {
  return(
  <svg  height="300" width="300"  >
    <circle cx="150" cy="150" r="150" fill="yellow" id="face"/>
    <circle cx="100" cy="100" r="15" fill="black" id="left-eye"/>
    <circle cx="200" cy="100" r="15" fill="black" id="right-eye"/>
    <path d="M 75 200 Q 150 260 225 200" stroke="black"  strokeWidth="4" fill="none" id="mouth"/>
  </svg>
)
}
```

And then we are going to include our <Face/> component in our App.

```
const App = () => {
  return (
    <>
      <h1>Be Happy</h1>
      <Face />
    </>
  )
}
```

## 2. Make our face customizable

We can make our face customizable by adding some props that let us change some attributes of our svg like `fill` and `path`.

```
const Face = (props) => {

  const {color, x, y} =props;

  return(
  <svg  height="300" width="300"  >
    <circle cx="150" cy="150" r="150" fill={color} id="face"/>
    <circle cx="100" cy="100" r="15" fill="black" id="left-eye"/>
    <circle cx="200" cy="100" r="15" fill="black" id="right-eye"/>
    <path d={`M 75 200 Q ${x} ${y} 225 200`} stroke="black"  strokeWidth="4" fill="none" id="mouth"/>
  </svg>
)
}
```

Now, we can change the color of our face, and the shape of its mouth.

When we call our <Face> component, we are going to pass the required props: `color`, `x` and `y`.

```
const App = () => {
  return (
    <>
       <h1>Be Happy</h1>
       <Face  color={"cyan"} x={150} y={130}/>
       <Face  color={"yellow"} x={150} y={260}/>
       <Face  color={"pink"} x={150} y={200}/>
    </>
  )
}
```

## 3. Adding animations to SVG with React-Spring

We are going to add an animation, to make the mouth be drawn when we click on the face.

React-spring is a great library that helps to build your animations. It’s a spring-physics based animation library, the engine behind react-springs works based on physics and it tries to animate your elements based on how they would if they were in the real world.

We’re going to need `useSpring` and `animated` from react-spring:

```
import { useSpring, animated } from “react-spring”;
```

`useSpring` is a custom hook that turns values into animated-values, it takes an object with the `from` and `to` values as the start and end states while react-spring handles the transition between them.

Adding some local state will allow us to add some actual interactions to our animation. Instead of `from` and `to`, we can use a ternary operator for our animations.

First, we are going to define a state in our component for when the face is without a mouth (false) and with it is with a mouth (true). And this state will change when we click inside the face.

```
const [active, setActive] = useState(false);

const animatedProps = useSpring({
   strokeDasharray: active ? "170,0" : "0,170"
 });

```

To create the stroke animation, we are using the `stroke-dasharray` property:

`stroke-dasharray`
It turns a solid line into a dashed one. The reason it is called a dasharray is that you provide an array of numbers as value. The values define the length of dashes and spaces.

When active is true:
`strokeDasharray = “170,0”`
We are defining a dash array where each dash is the size of the stroke itself.

When active is false:
`strokeDasharray = “0,170”`
Now the stroke will be invisible. Since the spacing between dashes is the entire length of the stroke.

To apply our spring animation, we need to add animated onto our html elements and pass our animation to our style.

```
<animated.path
       d={`M 75 200 Q ${x} ${y} 225 200`}
       strokeWidth="4"
       stroke="black"
       fill="none"
       id="mouth"
       strokeDasharray={animatedProps.strokeDasharray}
     />
```
