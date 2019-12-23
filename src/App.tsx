import React, { useState, useEffect } from 'react';
import {BookList} from './components';
import { BookAPI } from './utils';
import './App.css';

const App: React.FC = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookAPI.getAll()
      .then(books => setBooks(books))
      .catch(error => console.error(error));
  }, [books]);



  return (
    <div className="app">
       <BookList books={books}/>
    </div>
  );
}

export default App;
