import { useState, useContext } from "react"
import BookContext from "../context/books"


function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('')
    const { hanldeCreate } = useContext(BookContext)

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        hanldeCreate(title)
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