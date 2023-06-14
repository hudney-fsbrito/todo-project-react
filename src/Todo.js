import React, { useEffect, useState } from 'react';
import TodoForm from './componentes/TodoForm';
import ListTodo from './componentes/ListTodo';
import Modal from './componentes/Modal';
import Item from './componentes/Item'
import './Todo.css';

const SAVED_ITEM = 'savedItems'

function Todo() {

    const [items, setItem] = useState([]);
    const [showModal, setShowModal] = useState(false);

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
        
        //Desaparece com Modal assim que add item
        // onHideModal()
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

    function onHideModal() {
        
            setShowModal(false)
          
    }

    return (
        <div className="container">
            <header className='header'><h1>Todo List</h1><button onClick={()=>{setShowModal(true)}}className='addButton'>+</button ></header>
            
            <ListTodo onDone={onDone} onDeleteItem={onDeleteItem} items={items}></ListTodo>
            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
        </div>
    )

}

export default Todo;