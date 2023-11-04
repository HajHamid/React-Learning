import { useState } from "react"

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        onCreate(title)
        setTitle('')
    }

    return (
        <div className="book-create">
            <h3>Add Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" type="text" onChange={handleChange} value={title} />
                <button className="button">Add</button>
            </form>
        </div>
    )
}

export default BookCreate