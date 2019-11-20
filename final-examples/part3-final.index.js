import React, { useState } from "react"
import ReactDOM from "react-dom"
import { FaPlus, FaMinus } from "react-icons/fa"

const Minutes = () => {
    const [minutes, setMinutes] = useState(5)
    const [error, setError] = useState(null)

    const handleSubtract = () => {
        if (minutes > 1) {
            setMinutes(minutes - 1)
            setError(null)
        } else {
            setError("Greater than 0 please.")
        }
    }

    const handleAdd = () => {
        if (minutes < 9) {
            setMinutes(minutes + 1)
            setError(null)
        } else {
            setError("Less than 10 please.")
        }
    }


    return (
        <div id="Minutes">
            <button onClick={handleSubtract}>
                <FaMinus />
            </button>
            {minutes} Minutes
            <button onClick={handleAdd}>
                <FaPlus />
            </button>
            <div id="Error">
                { error && (
                    <p>
                        { error }<br />
                        <button onClick={() => setError(null)}>
                            dismiss
                        </button>
                    </p>
                )}
            </div>
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
