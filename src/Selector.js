import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Select } from "./Select";
import PropTypes from "prop-types";

class Selector extends Component {
  static propTypes = {
    handleOnBookUpdate: PropTypes.func
  };

  state = {
    value: this.props.book.shelf ? this.props.book.shelf : "none"
  };

  updateBook() {
    BooksAPI.update(this.props.book, this.state.value).then(books => {
      if (books.error !== "empty query") {
        if (window.location.pathname === "/") {
          this.props.handleOnBookUpdate();
        } 
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
