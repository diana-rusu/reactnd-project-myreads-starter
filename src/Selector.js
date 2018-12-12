import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Selector extends Component {
    state ={
        shelf: ''
    }

    updateBook() {
        BooksAPI.update(this.props.book, this.state.shelf)
        .then((response) =>{
            console.log("RESPONSE", response)
        });
    }
    onChange = event => {
        this.setState({ shelf: event.target.value },
            () => {
                if (this.state.shelf) {
                    this.updateBook()
                } else if (!this.state.shelf) {
                }
        });
      };
    
    render() {
        
        return (
            <select onChange={this.onChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default Selector;