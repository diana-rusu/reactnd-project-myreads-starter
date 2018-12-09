import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Search from './Search';
import Bookshelf from './Bookshelf';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Bookshelf} />
        <Route path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
