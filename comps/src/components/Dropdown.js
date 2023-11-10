import { useState, useEffect, useRef } from "react"
import Panel from "./Panel"
import { GoChevronDown } from 'react-icons/go'

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()

    useEffect(() => {
        const handleClick = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClick, true)

        return () => {
            document.removeEventListener('click', handleClick)

        }
    }, [])


    const renderedOptions = options.map((option) => {
        return <div
            key={option.value}
            className="hover:bg-sky-100 rounded cursor-pointer p-1"
            onClick={() => handleOptionClick(option)}
        >
            {option.label}
        </div>
    })

    const handleChange = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer"
                onClick={handleChange}
            >
                {value?.label || "Select ..."}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown