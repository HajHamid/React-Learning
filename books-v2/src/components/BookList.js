import BookShow from './BookShow'
import useBookContext from '../hooks/bookContextHook'

function BookList() {
    const { books } = useBookContext()

    const renderBook = books.map((book) => {
        return <BookShow book={book} key={book.id} />
    })

    return <div className="book-list">
        {renderBook}
    </div>

}

export default BookList