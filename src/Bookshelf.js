import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.category}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map((book) => {
                       return <li 
                        key={book.title}>
                        <Book 
                            book={book}
                            title={book.title} 
                            authors={book.authors} 
                            url={`url(${book.imageLinks['thumbnail']})`}
                        />
                       </li>
                    })}       
                    </ol>
                </div>
            </div>
        )
    }

}

export default Bookshelf;