import React from 'react';

export const Select = (props) => (
    <select onChange={props.onChange} value={props.value} name={props.name}>
        <option>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
)

