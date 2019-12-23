import React from 'react';
import BookItem from './BookItem';
import Book from '../utils/Book';

interface BookListProps {
    books: Array<Book>
}

const BookList = ({ books }: BookListProps) => {
    return (
        <div className='list-books-content'>
            {
                books.map(book => (
                    <BookItem key={book.id} book={book}/>
                ))
        }
        </div>
    )
};

export default BookList;