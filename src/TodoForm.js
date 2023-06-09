import React, { useState } from 'react';


//Salava texto e chama a função para add na lista
function TodoForm(props) {
    const [text, setText] = useState("");

    //Recebe o texto do formulário
    function handleChange(event) {
        let texto = event.target.value;
        setText(texto)
    }

    //Chama função para add na lista
    function addItems(event) {
        event.preventDefault();
        // setItem([...items, text])
        props.onAddItem(text)
        setText("")

    }

    return(
    <form>
        <input onChange={handleChange} type="text" value={text}></input>
        <button onClick={addItems}>ADD</button>

    </form>

    )
}

export default TodoForm;