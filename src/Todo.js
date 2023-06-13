import React, { useEffect, useState } from 'react';
import TodoForm from './componentes/TodoForm';
import ListTodo from './componentes/ListTodo';
import Item from './componentes/Item'
import './Todo.css';

const SAVED_ITEM = 'savedItems'

function Todo() {

    const [items, setItem] = useState([]);

    //Salva o item na mémoria do browser
    useEffect(()=>{
        let sevedItems = JSON.parse(localStorage.getItem(SAVED_ITEM))
        if(sevedItems){
            setItem(sevedItems)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem(SAVED_ITEM, JSON.stringify(items))
    },[items])


    //Adiciona as tarefas na lista
    function onAddItem(text){
        let item = new Item(text)
        setItem([...items, item])
    }

    function onDeleteItem(item){
        let filterItem = items.filter(it=>it.id !== item.id)
        setItem(filterItem)
    }

    function onDone(item){
        let updateDone = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done
            }
            return it;
        })
        setItem(updateDone)
    }

    return (
        <div className="container">
            <h1>Todo List</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <ListTodo onDone={onDone} onDeleteItem={onDeleteItem} items={items}></ListTodo>
        </div>
    )

}

export default Todo;