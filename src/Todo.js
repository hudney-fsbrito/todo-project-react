import React, { useState } from 'react';
import TodoForm from './TodoForm';
import ListTodo from './ListTodo';
import Item from './Item'
import './Todo.css';

function Todo() {

    const [items, setItem] = useState([]);

    //Adiciona as tarefas na lista
    function onAddItem(text){
        let item = new Item(text)
        setItem([...items, item])
    }

    function onDeleteItem(item){
        let filterItem = items.filter(it=>it.id !== item.id)
        setItem(filterItem)
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <ListTodo onDeleteItem={onDeleteItem} items={items}></ListTodo>
        </div>
    )

}

export default Todo;