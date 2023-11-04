import { useState } from "react"
import BookEdit from './BookEdit'

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
        onEdit(id, newTitle)
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