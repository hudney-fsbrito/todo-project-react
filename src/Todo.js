import React, { useState } from 'react';
import TodoForm from './TodoForm';
import ListTodo from './ListTodo';
import './Todo.css';

function Todo() {

    const [items, setItem] = useState([]);

    //Adiciona as tarefas na lista
    function onAddItem(item){
        setItem([...items, item])
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <ListTodo items={items}></ListTodo>
        </div>
    )

}

export default Todo;