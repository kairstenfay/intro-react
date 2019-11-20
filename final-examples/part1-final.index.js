import React from "react"
import ReactDOM from "react-dom"
import { FaPlus, FaMinus } from "react-icons/fa"

// All React needs to render is a dom element, and a react element
const Button = (props) => {
    return (
      <button>
        {props.children}
      </button>
    )
  }

const App = () => (
  <div>
    <Button>
      <FaMinus /> Subtract
    </Button>
    <Button>
      <FaPlus /> Add
    </Button>
  </div>
)

const domElement = document.getElementById("root")

// and away we go!
ReactDOM.render(<App />, domElement)
