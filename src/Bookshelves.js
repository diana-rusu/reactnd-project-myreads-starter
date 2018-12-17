import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import * as BooksAPI from "./BooksAPI";

class Bookshelves extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
    this.handleOnBookUpdate = this.handleOnBookUpdate.bind(this);
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getBookById = id => {
    BooksAPI.get(id).then(book => {
      return book;
    });
  };

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  };

  handleOnBookUpdate() {
    this.getAllBooks();
  }

  render() {
    let currentlyReadingList = [];
    let wantToReadList = [];
    let readList = [];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.books.forEach(book => {
              if (book.shelf === "currentlyReading") {
                currentlyReadingList.push(book);
              } else if (book.shelf === "wantToRead") {
                wantToReadList.push(book);
              } else if (book.shelf === "read") {
                readList.push(book);
              }
            })}
            <Bookshelf
              handleOnBookUpdate={this.handleOnBookUpdate}
              category="Currently Reading"
              books={currentlyReadingList}
            />
            <Bookshelf
              handleOnBookUpdate={this.handleOnBookUpdate}
              category="Want to Read"
              books={wantToReadList}
            />
            <Bookshelf
              handleOnBookUpdate={this.handleOnBookUpdate}
              category="Read"
              books={readList}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Bookshelves;
