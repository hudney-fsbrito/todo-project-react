import React from 'react';

function ListTodo(props) {

    return (
        <ul>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
    )
}

export default ListTodo;