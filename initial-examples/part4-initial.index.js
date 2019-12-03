import React, { useState } from "react"
import ReactDOM from "react-dom"
import { FaPlus, FaMinus } from "react-icons/fa"
import { format as formatDate } from "date-fns"

const Minutes = (props) => {
    const [minutes, setMinutes] = useState(30)

    return (
      <div className="Minutes">
        <button>
            <FaMinus />
        </button>
        <input defaultValue={minutes} id="minutes" />
        <button>
            <FaPlus />
        </button>
        <br />
        <label htmlFor="minutes">
          Mins on {props.date}
        </label>
      </div>
    )
}

const App = () => {
    return (
        <div>
            <Minutes date={formatDate(new Date(), "MMM do")} />
        </div>
    )
}

const domElement = document.getElementById("root")

ReactDOM.render(<App />, domElement)
