import React from 'react';

export const Select = (props) => (
    <select onChange={props.onChange} value={props.shelf} name="category">
        <option value="move">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
)

