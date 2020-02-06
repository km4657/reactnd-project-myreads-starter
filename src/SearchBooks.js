import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {
  state = {
    searchBooks : [],
    query : ''
  };

  updateQuery = (query) => {
    console.log(`query: ${query}`)
    this.setState(prevState => ({
      query: query.trim()
    }));
    if (query.length > 0) {
      console.log('about to call API')
      BooksAPI.search(query.trim()).then(books => {
        if (books.length > 0) {
          console.log(books);
          this.setState(prevState => ({
            searchBooks : books
          }));
        }
      }
    );
  }
   
  }

  componentDidMount() {
    this.setState(prevState => ({
      searchBooks : this.props.books
    }));
  }
    
  resetQuery = () =>{
    this.updateQuery('');
  }
 
  render() {
    
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.props.handlePage(false)}>Close</button>
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
                  // use id to see if book exists in my library, if so set shelf
                  this.state.searchBooks.map((book) => {
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
export default SearchBooks;