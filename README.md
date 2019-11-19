# Intro to React Workshop
Many thanks to ReactTraining's [hooks-workshop](https://github.com/ReactTraining/hooks-workshop) repo.
Much of this tutorial is borrowed directly from their work.


## What is React?
React, also known as React.js, is [a JavaScript library for building user interfaces](https://reactjs.org/).

It is the front-end framework that powers Auspice and Nextstrain.org.

React, created by Facebook, rose to popularity for its pleasant developer experience.
React views are declarative and composable.

## What is the DOM?
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


## Getting started with React
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
It’s special to React.

Inside of the `<div>` tag, edit "Hello, React!" to greet you by name.
The React server detects the change in `src/index.js` and reloads the browser accordingly.
Neat!

Now, if you open up your developer tools (right-click, "Inspect Element"), you can see under the `<body>` node, a DOM element that starts with `<div id="root">`.
This is the DOM element we told React to modify in our code.
We targeted it by referring to its ID, "root". 
