import BookShow from './BookShow'
import { useContext } from 'react'
import BookContext from '../context/books'

function BookList({ books, onDelete, onEdit }) {
    const { count, updateCount } = useContext(BookContext)

    const renderBook = books.map((book) => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
    })

    return <div className="book-list">
        {count}
        <button onClick={updateCount}>Click</button>
        {renderBook}
    </div>

}

export default BookList