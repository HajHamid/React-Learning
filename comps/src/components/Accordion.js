import { useState } from "react"
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (nextIndex) => {
        setExpandedIndex((currentIndex) => {
            if (nextIndex === currentIndex) {
                return -1
            } else {
                return nextIndex
            }
        })
    }

    const rendered = items.map((item, index) => {
        const isExpanded = expandedIndex === index
        const icon = isExpanded ? <GoChevronDown /> : <GoChevronLeft />

        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)}
                    className="flex bg-gray-50 border-b p-1 items-center justify-between cursor-pointer"
                >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        )
    })

    return (
        <div>{rendered}</div>
    )
}

export default Accordion