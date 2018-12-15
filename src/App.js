import React from 'react';
import './App.css';
import Search from './Search';
import Bookshelves from './Bookshelves';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Bookshelves} />
        <Route path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
