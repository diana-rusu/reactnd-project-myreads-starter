import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import * as BooksAPI from "./BooksAPI";

class Bookshelves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.getAllBooks();
  }

  getBookById = id => {
    BooksAPI.get(id).then(book => {
      return book;
    });
  };

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      if (this.mounted) {
        this.setState({
          books
        });
      }
    });
  };

  componentDidUpdate() {
    this.getAllBooks();
  }

  componentWillUnmount() {
    this.mounted = false;
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
              category="Currently Reading"
              books={currentlyReadingList}
            />
            <Bookshelf
              category="Want to Read"
              books={wantToReadList}
            />
            <Bookshelf
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
