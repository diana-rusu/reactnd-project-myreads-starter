import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Select } from './Select';

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
        })
        this.props.handleOnBookUpdate(this.state.books);
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
      <Select name="category" value={this.state.shelf} onChange={this.onChange} />
    );
  }
}

export default Selector;
