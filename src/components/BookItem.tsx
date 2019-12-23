import React from 'react';
import Book from '../utils/Book'

interface BookItemProps {
    book: Book,
}

const BookItem = ({ book }: BookItemProps) => {

    return (
        <div className='book'>
            <div>
                <img className='book-cover' alt={book.title} src={book.imageLinks.thumbnail} />
                <p className='book-title'>{book.title}</p>
                <p className='book-authors'>{book.authors.join(', ')}</p>
            </div>
        </div>
    )
};

export default BookItem;