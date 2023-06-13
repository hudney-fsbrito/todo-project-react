import React from 'react';
import ListItem from './ListItem';


//Cria a lista e dá referencia ao conteúdo dela
function ListTodo(props) {

    return (
        <ul>
            {props.items.map(item => <ListItem key={item.id}  item={item} onDone={props.onDone} onDeleteItem={props.onDeleteItem}></ListItem>)}
        </ul>
    )
}

export default ListTodo;