import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'


class SearchBooks extends Component {
  state = {
    searchBooks : [],
    query : ''
  };

  updateQuery = (query) => {
    console.log(`query: ${query}`)
    this.setState(prevState => ({
      query: query
    }));
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.length > 0) {
          this.setState(prevState => ({
            searchBooks : books
          }));
        }
        else {
          this.setState(prevState => ({
            searchBooks : []
          }));
        }
      }, () => {
        this.setState(prevState => ({
          searchBooks : []
        }));
      }
    );
  }
  else
  {
    this.setState(prevState => ({
      searchBooks : []
    }));
  }
   
  }
    
  resetQuery = () =>{
    this.updateQuery('');
  }
 
  render() {
    
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'></Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                  <input 
                    type='text'
                    placeholder='"Search by title or author"'
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                  ></input>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                  this.state.searchBooks.map((book) => {
                    // use id to see if book exists in my library, if so set shelf
                    book.shelf = this.props.getCurrentShelf(book.id);
                    return (<Book key={book.id} book={book} onChangeShelf={this.props.onChangeShelf}/>)
                  })
                }
              </ol>
            </div>
          </div>
    )
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  getCurrentShelf: PropTypes.func.isRequired
}

export default SearchBooks;