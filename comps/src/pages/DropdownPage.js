import Dropdown from "../components/Dropdown"
import { useState } from "react"

function DropdownPage() {
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

export default DropdownPage