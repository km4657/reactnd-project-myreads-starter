import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import PropTypes from 'prop-types';


class MyReads extends Component {
  
  render() {
    const shelves= [
      {'id': 1, 'shelfName' :'currentlyReading', 'shelfHeading': 'Currently Reading'},
      {'id': 2, 'shelfName' :'wantToRead', 'shelfHeading': 'Want To Read'},
      {'id': 3, 'shelfName' :'read', 'shelfHeading': 'Read'}
    ]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <ol className="list-books-content">
          {shelves.map((shelf) => (
          <Shelf key={shelf.id} books={this.props.books} onChangeShelf={this.props.onChangeShelf} shelf={shelf} />
          ))}
        </ol>
        <div>
            <Link className="open-search" to='/search'>
            </Link> 
        </div>
      </div>
    )
  }
}
MyReads.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default MyReads;