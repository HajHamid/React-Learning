import { useState } from "react"
import AnimalShow from './AnimalShow'
import "./App.css"

function getRandomAnimal() {
    const animalsList = ['cat', 'dog', 'bird', 'cow', 'gator', 'horse']

    return animalsList[Math.floor(Math.random() * animalsList.length)]
}


function App() {
    const [animals, setAnimals] = useState([])

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    )
}

export default App