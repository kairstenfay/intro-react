import React, { useState } from "react"
import ReactDOM from "react-dom"
import { FaPlus, FaMinus } from "react-icons/fa"

const App = () => {
    const minutes = 5

    return (
        <div>
            <button>
                <FaMinus />
            </button>
            {minutes} Minutes
            <button>
                <FaPlus />
            </button>
        </div>
    )
}

const domElement = document.getElementById("root")

ReactDOM.render(<App />, domElement)
