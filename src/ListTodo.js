import React from 'react';

function ListTodo(props) {

    return (
        <ul>
            {props.items.map((item) =>
                <li key={item.id}>
                    {item.text}
                    <button onClick={()=>{props.onDeleteItem(item)}}><img alt='delete' src='./assets/trash-bin.svg'></img></button>
                </li>)}
        </ul>
    )
}

export default ListTodo;