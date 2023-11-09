import Dropdown from "./components/Dropdown"
import { useState } from "react"

function App() {
    const options = [
        { 'label': 'Red', 'value': 'red' },
        { 'label': 'Green', 'value': 'green' },
        { 'label': 'Blue', 'value': 'blue' }
    ]

    const [selected, setSelected] = useState(null)

    const handleClick = (option) => {
        setSelected(option)
    }

    return (
        <div>
            <Dropdown options={options} value={selected} onChange={handleClick} />
        </div>
    )
}

export default App