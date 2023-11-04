import { useState } from 'react'
import "../SearchBar.css"

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')

    const hanldeChange = (e) => {
        setTerm(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        onSubmit(term)
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input type="text" placeholder="type in ... " onChange={hanldeChange} value={term} />
            </form>
        </div>
    )
}

export default SearchBar