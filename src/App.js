import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MyReads from './MyReads';
import SearchBooks from './SearchBooks';
import { Route, Switch } from 'react-router-dom';

// code from tylermcginnis.com (https://tylermcginnis.com/react-router-handling-404-pages/)
const NoMatch = ({ location }) => (
  <div>
    <h3>No match for {location.pathname}</h3>
  </div>
)

class BooksApp extends Component {
  state = {
    books : []
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
        }));
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
      <Switch>
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
        <Route component={NoMatch} />
      </Switch>
      </div>
    )
  }
}

export default BooksApp