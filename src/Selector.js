import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";

class Selector extends Component {
  state = {
    shelf: "",
    books: []
  };

  updateBook() {
    BooksAPI.update(this.props.book, this.state.shelf).then(books => {
      if (books.error === "empty query") {
        this.setState({
          books: []
        });
      } else {
        this.setState({
          books: books
        });
      }
    });
  }
  onChange = event => {
    this.setState({ shelf: event.target.value }, () => {
      if (this.state.shelf) {
        this.updateBook();
      } else if (!this.state.shelf) {
      }
    });
  };

  render() {
    return (
      <select onChange={this.onChange}>
        <option value="move">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}

export default Selector;
