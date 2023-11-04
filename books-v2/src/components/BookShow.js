import { useState } from "react"
import BookEdit from './BookEdit'
import useBookContext from "../hooks/bookContextHook"

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false)
    const { handleDelete } = useBookContext()

    const handleDeleteClick = () => {
        handleDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = () => {
        setShowEdit(false)
    }

    const content = !showEdit ? <h1>{book.title}</h1> : <BookEdit book={book} onSubmit={handleSubmit} />

    return (
        <div className="book-show">
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow