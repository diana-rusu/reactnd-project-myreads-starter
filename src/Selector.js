import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Select } from './Select';

class Selector extends Component {
  constructor() {
    super()
    this.state = {
      value: "none",
      books: []
    };
    this.onChange = this.onChange.bind(this)
  }
  

  updateBook() {
    BooksAPI.update(this.props.book, this.state.value).then(books => {
      if (books.error === "empty query") {
        this.setState({
          books: []
        });
      } else {
        this.setState({
          books: books
        })
        this.props.handleOnBookUpdate();
      }
    });
  }
  onChange = event => {
    this.setState({ value: event.target.value }, () => {
      if (this.state.value) {
        this.updateBook();
      } else if (!this.state.value) {
      }
    });
  };

  render() {
    return (
      <Select 
      name="category" 
      value={this.state.value} 
      onChange={this.onChange}
      />
    );
  }
}

export default Selector;
