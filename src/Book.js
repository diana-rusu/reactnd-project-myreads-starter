import React, { Component } from 'react';
import Selector from './Selector'

class Book extends Component {
    render() {
        return (
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.url }}></div>
            <div className="book-shelf-changer">
                <Selector />
            </div>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.authors}</div>
        </div>
        )
    }

}

export default Book;