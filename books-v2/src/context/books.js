import { createContext, useState, useCallback } from 'react'
import axios from 'axios'

const BookContext = createContext()

function Provider({ children }) {
    const [books, setBooks] = useState([])

    const fetchBooks = useCallback(async () => {
        const response = await axios.get(
            'http://localhost:3001/books'
        )
        setBooks(response.data)
    }, [])

    const hanldeCreate = async (title) => {
        const response = await axios.post(
            'http://localhost:3001/books',
            { title }
        )
        const updatedBooks = [...books, response.data]

        setBooks(updatedBooks)
    }

    const handleDelete = async (id) => {
        await axios.delete(
            'http://localhost:3001/books/' + id
        )
        const updatedBooks = books.filter((book) => {
            return id !== book.id
        })

        setBooks(updatedBooks)
    }

    const handleEdit = async (id, newTitle) => {
        const response = await axios.put(
            'http://localhost:3001/books/' + id, {
            title: newTitle
        }
        )
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...books, ...response.data }
            }
            return book
        })

        setBooks(updatedBooks)
    }

    const valueToShare = {
        books,
        hanldeCreate,
        handleDelete,
        handleEdit,
        fetchBooks
    }

    return (
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider >
    )

}

export { Provider }
export default BookContext