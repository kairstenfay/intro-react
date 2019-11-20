import React, { useState } from "react"
import ReactDOM from "react-dom"
import { FaPlus, FaMinus } from "react-icons/fa"

const Minutes = () => {
    const [minutes, setMinutes] = useState(5)

    const handleSubtract = () => setMinutes(minutes - 1)
    const handleAdd = () => setMinutes(minutes + 1)

    return (
        <div id="Minutes">
            <button onClick={handleSubtract}>
                <FaMinus />
            </button>
            {minutes} Minutes
            <button onClick={handleAdd}>
                <FaPlus />
            </button>
        </div>
    )
}

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleCounter = () => setCounter(counter + 1)

    return (
        <div id="Counter">
            <button onClick={handleCounter}>
                You've clicked this Counter {counter} times!
            </button>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Minutes />
            <Counter />
        </div>
    )
}

const domElement = document.getElementById("root")

ReactDOM.render(<App />, domElement)
