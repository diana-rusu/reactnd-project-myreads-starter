import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class Bookshelves extends Component {
    state ={
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState({
          books
        }));
      }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    <Bookshelf category='Currently Reading' books={this.state.books} />
                    <Bookshelf category='Want to Read' books={this.state.books} />
                    <Bookshelf category='Read' books={this.state.books} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search' >
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default Bookshelves;