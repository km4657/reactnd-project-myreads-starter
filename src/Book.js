import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'


class Book extends Component {

  changeShelf = event => {
    BooksAPI.update(this.props.book, event.target.value)
      .then( () => {
        this.props.onChangeShelf();
      })
  }

 
  render() {
    const imageLinks = this.props.book.imageLinks;
    const currentShelf = this.props.book.shelf;
    const authors = this.props.book.authors;
    const title = this.props.book.title;
    

    return (
      <li>
        <div className="book">
          <div className="book-top">
            { (imageLinks && imageLinks.smallThumbnail) && 
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
            }
            <div className="book-shelf-changer">
              <select value={currentShelf} onChange={this.changeShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          { (authors && authors.length > 0) && 
            <div className="book-authors">{[...authors]}></div>
          }
        </div>
      </li>
    )
  }
}

export default Book