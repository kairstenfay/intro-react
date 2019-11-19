import React from "react"
import ReactDOM from "react-dom"

// All React needs to render is a dom element, and a react element
const reactElement = <div>Hello, React!</div>
const domElement = document.getElementById("root")

// and away we go!
ReactDOM.render(reactElement, domElement)
