import './index.css'
import { useEffect } from 'react'
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'
import useBookContext from './hooks/bookContextHook'

function App() {
    const { fetchBooks } = useBookContext()

    useEffect(() => fetchBooks(), [])

    return (
        <div className='app'>
            <BookList />
            <BookCreate />
        </div>
    )
}


export default App