import BookShow from './BookShow'

function BookList({ books, onDelete, onEdit }) {
    const { count, updateCount } = useContext(BookContext)

    const renderBook = books.map((book) => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
    })

    return <div className="book-list">
        {renderBook}
    </div>

}

export default BookList