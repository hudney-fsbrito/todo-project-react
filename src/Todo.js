import React, { useState } from 'react';
import ListTodo from './ListTodo'
import './Todo.css';

function Todo() {

    const [text, setText] = useState("");
    const [items, setItem] = useState([]);

    function handleChange(event) {
        let t = event.target.value;
        setText(t)
    }

    function addItems(event) {
        event.preventDefault();
        setItem([...items, text])
        setText("")

    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <form>
                <input onChange={handleChange} type="text" value={text}></input>
                <button onClick={addItems}>ADD</button>

            </form>
            <ListTodo items={items}></ListTodo>
        </div>
    )

}

export default Todo;