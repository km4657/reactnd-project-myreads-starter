import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Shelf extends Component {
  render () {
    const { books, onChangeShelf, shelf } = this.props;
    const shelvedBooks = books.filter(b => (
      b.shelf === shelf.shelfName))
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.shelfHeading}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {shelvedBooks.map((book) => (
        <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
      ))} 
        </ol>
      </div>
    </div>

    )
  }
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  shelf: PropTypes.array.isRequired
}

export default Shelf;