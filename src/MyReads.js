import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'


class MyReads extends Component {
  state = {
    // not sure
  };

 
  render() {
    const { books, onChangeShelf } = this.props;
    const currentlyReading = books.filter(b => (
      b.shelf === 'currentlyReading'))
    const wantToRead = books.filter(b => (
        b.shelf === 'wantToRead'))
    const read = books.filter(b => (
          b.shelf === 'read'))
    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {currentlyReading.map((book) => (
                <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
              ))} 
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {wantToRead.map((book) => (
                <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
              ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {read.map((book) => (
                <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
              ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div>
            <Link className="open-search" to='/search'>Add a book</Link> 
        </div>
      </div>
    )
  }
}
export default MyReads;