import { useState, useEffect } from 'react'
import axios from "axios"
import './index.css'
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'

function App() {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get(
            'http://localhost:3002/books'
        )
        setBooks(response.data)
    }

    useEffect(() => fetchBooks(), [])

    const hanldeCreate = async (title) => {
        const response = await axios.post(
            'http://localhost:3002/books',
            { title }
        )
        const updatedBooks = [...books, response.data]

        setBooks(updatedBooks)
    }

    const handleDelete = async (id) => {
        await axios.delete(
            'http://localhost:3002/books/' + id
        )
        const updatedBooks = books.filter((book) => {
            return id !== book.id
        })

        setBooks(updatedBooks)
    }

    const handleEdit = async (id, newTitle) => {
        const response = await axios.put(
            'http://localhost:3002/books/' + id, {
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

    return (
        <div className='app'>
            <BookList books={books} onDelete={handleDelete} onEdit={handleEdit} />
            <BookCreate onCreate={hanldeCreate} />
        </div>
    )
}


export default App