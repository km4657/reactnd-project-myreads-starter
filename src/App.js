import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'


class BooksApp extends Component {
  state = {
    books : [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  componentDidMount() {
    this.updateBooks();
  }

  updateBooks = ()  =>
  {
    BooksAPI.getAll().then(books => 
      {
        this.setState(prevState => ({
          books
        }))
      }
    )
  }
  
  getCurrentShelf = (id) => {
    const book = this.state.books.find( (book) => 
      (book.id===id)
    );
    return (book !== undefined) ? book.shelf : 'none';
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/search' render={() => (
          <SearchBooks 
            books={this.state.books}
            onChangeShelf={this.updateBooks}
            getCurrentShelf={this.getCurrentShelf} 
      />)}/>
      <Route exact path='/' render={() => (
          <MyReads
          books={this.state.books}
          onChangeShelf={this.updateBooks}
      />)}/>
      </div>
    )
  }
}

export default BooksApp