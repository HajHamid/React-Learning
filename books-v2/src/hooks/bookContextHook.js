import { useContext } from 'react';
import BooksContext from '../context/books';


function useBookContext() {
    return useContext(BooksContext)
}

export default useBookContext