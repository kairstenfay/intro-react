# Intro to React Workshop
Many thanks to ReactTraining's [hooks-workshop](https://github.com/ReactTraining/hooks-workshop) repo.
Much of this tutorial is borrowed directly from their work.
I've also quoted liberally from [the ReactJS website](https://reactjs.org).

## Table of Contents
- [Intro to React Workshop](#intro-to-react-workshop)
  - [Table of Contents](#table-of-contents)
  - [Part 1](#part-1)
    - [What is React?](#what-is-react)
    - [What is the DOM?](#what-is-the-dom)
    - [Getting started with React](#getting-started-with-react)
    - [What is JSX?](#what-is-jsx)
    - [React elements](#react-elements)
    - [React components](#react-components)
  - [Part 2](#part-2)
    - [React state](#react-state)


## Part 1
### What is React?
React, also known as React.js, is [a JavaScript library for building user interfaces](https://reactjs.org/).

It is the front-end framework that powers Auspice and Nextstrain.org.

React, created by Facebook, rose to popularity for its pleasant developer experience.
React views, also called User Interfaces or UIs, are declarative and composable.

### What is the DOM?
The Document Object Model, or DOM, is a
> language-independent interface that treats an HTML document as a tree structure wherein each node is an object representing a part of the document. ([Wikipedia](https://en.wikipedia.org/wiki/Document_Object_Model))

Let's see the DOM in action.
Go to https://github.com and open up the developer tools by right-clicking and selecting "Inspect Element".
Find this node near the top of the tree:

```html
<div class="application-main " data-commit-hovercards-enabled="">
```

Now find the node nested under this one that begins with:
```html
<div class="d-flex flex-wrap bg-gray" style="min-height: 100vh;">
```
Expand the node by clicking on the arrow on the left-hand side of the `<div` tag opening. Now the nested nodes are visible. Mouseover them to see their corresponding UI elements on the web page.

DOM elements, or nodes, like these are what we will be manipulating with React.


### Getting started with React
Let's see React in action.
Make sure you've cloned [this git repo](https://github.com/kairstenfay/intro-react):
```sh
git clone git@github.com:kairstenfay/intro-react.git
```

Now, change into your newly cloned repo and install the required dependencies:
```sh
cd intro-react
npm install
```

Once your dependencies are done installing, fire up the React app wih:
```sh
npm run start
```

In your browser, at `localhost:3000`, you should now see a mostly empty view with a tiny message saying "Hello, React!"

If we open the file at `src/index.js`, we can see that our app consists of only a few lines of code:
```jsx
import React from "react"
import ReactDOM from "react-dom"

// All React needs to render is a dom element, and a react element
const reactElement = <div>Hello, React!</div>
const domElement = document.getElementById("root")

// and away we go!
ReactDOM.render(reactElement, domElement)
```
The HTML-looking syntax, similar to what you saw in the DOM, in JavaScript is called JSX.
It’s special to React, and we'll discuss it again in a bit.

Inside of the `<div>` tag, edit "Hello, React!" to greet you by name.
The React server detects the change in `src/index.js` and reloads the browser accordingly.
Neat!

Now, if you open up your developer tools (right-click, "Inspect Element"), you can see under the `<body>` node, a DOM element that starts with `<div id="root">`.
This is the DOM element we told React to modify in our code.
We targeted it by referring to its ID, "root".

Let's modify our UI again, this time replacing the declaration of `reactElement` with the following code:
```jsx
const reactElement = (
  <button>
    + Add
  </button>
)
```

In your browser, you can now see a button that says "+ Add."

We mentioned that React is composable, so let's make the code a little more reusable.
Declare a JavaScript function that returns the text, "Add".
```js
const getTitle = () => "Add"
```

Now, invoke your new function, `getTitle()`, within the `reactElement` declaration.
Altogether, it looks like:
```jsx
const getTitle = () => "Add"

const reactElement = (
  <button>
    + {getTitle()}
  </button>
)
```

You should see no change in the view.

### What is JSX?
JSX is [a syntax extension to JavaScript](https://reactjs.org/docs/introducing-jsx.html).
We use it when defining React components to tell React what the UI should look like.
JSX is similar to a template language, but with the full power of JavaScript.

You can escape JSX and write JavaScript with curly brackets `{}`.
In the most recent example, we "escaped" the HTML-looking JSX to invoke pure JavaScript after the "+" sign.
```jsx
const reactElement = (
  <button>
    + {getTitle()}
  </button>
)
```
When we close the curly bracket, we return to JSX syntax.
To further illustrate this point, let us temporarily replace the code inside the curly brackets with an equation like this one:
```jsx
const reactElement = (
  <button>
    + {333 + 9 / 4}
  </button>
)  // 335.25!
```

Notice that you only see the result of the calculation.
If you remove the curly brackets, however, React renders the numbers as normal HTML text contained within JSX.
```jsx
const reactElement = (
  <button>
    + 333 + 9 / 4
  </button>
)  // No math, only sadness
```

### React elements
Let's reset our `reactElement` variable in `src/index.js` to the following code:
```jsx
const reactElement = (
  <button>
    + {getTitle()}
  </button>
)
```

With `reactElement`, we created what's called a [React element](https://reactjs.org/docs/rendering-elements.html).
React elements are the smallest building blocks of React apps.
They describe what you wnat to see on the screen.

React elements make up [React components](https://reactjs.org/docs/react-component.html).
We'll get more into those in a bit.
For now, let's import an existing component called `FaPlus`.
Add the following line to the top of your `src/index.js` file:
```js
import { FaPlus } from "react-icons/fa"
```

Now, replace the "+" in your `reactElement` with the `FaPlus` component, like so:
```jsx
const reactElement = (
  <button>
    <FaPlus /> {getTitle()}
  </button>
)
```
Make sure to close the `FaPlus` component with `/>`, or the app will fail to load!

The change in the view may seem subtle, but what we've just done is no small thing! We
1. imported an existing React component from a React library, and
2. rendered it within our `reactElement`.

The ability to mix and match elements and components is what makes React composable! 🎉


### React components
Let's turn our button into a React component and remove some stuff.

Delete `getTitle` and `reactElement`, replacing both of them with the following component:
```jsx
const Button = () => (
  <button>
    <FaPlus />
    Add
  </button>
)
```
In the final line that starts with `ReactDOM.render`, replace `reactElement` with `<Button />`, once again remembering to close the component with `/>`.
You should see no difference in the UI.

One of the great benefits of using components is that they're resuable.
Right now, this button always renders the same stuff inside.
But, if we use "props", or arbitrary inputs that get passed in, we can use it in multiple contexts.

Edit your declaration of `Button` to look like this:
```jsx
const Button = (props) => {
    return (
      <button>
        {props.children}
      </button>
    )
  }
```

Import `FaMinus` in the same way you imported `FaPlus`, with:
```js
import { FaPlus, FaMinus } from "react-icons/fa"
```

Add a second React component, `App`, defined as:
```jsx
const App = () => (
  <div>
    <Button>
      <FaPlus /> Add
    </Button>
    <Button>
      <FaMinus /> Subtract
    </Button>
  </div>
)
```

Finally, update the `ReactDOM.render` method to call `<App />` instead of `<Button />`.
Compare your final version of `src/index.js` with `final-examples/part1-final.index.js`.


## Part 2
Let's revisit a modified version of the final code from Part 1.
Replace the contents of `src/index.js` with the code from `initial-examples/part2-initial.index.js`.

So far, we have only learned one way to update the UI.
We called `ReactDOM.render()` to change the rendered output.
Next, we're going to modify our React app so that the view uses state instead of a hard-coded value for minutes.

### React state
In your newly refreshed `src/index.js` file, replace the declaration of `minutes` with:
```js
const [minutes, setMinutes] = useState(5)
```

`useState()` is a [React hook](https://reactjs.org/docs/hooks-intro.html).
Hooks are a new addition in React 16.8.
They let you use state and other React features without writing a class.
From the ReactJS website:
> We call it inside a function component to add some local state to it.
> React will preserve this state between re-renders.
> `useState` returns a pair: the current state value and a function that lets you update it.


To illustrate this concept, let's put our add and subtract buttons to work!
Modify the add and subtract `<button>` elements to pass them an `onClick` handler equal to the following, respectively:
```jsx
<button onClick={() => setMinutes(minutes + 1)}>
    <FaPlus />
</button>
```

```jsx
<button onClick={() => setMinutes(minutes - 1)}>
    <FaMinus />
</button>
```
Now, when we click the add or subtract buttons, React re-renders our `App` component while preserving state!
