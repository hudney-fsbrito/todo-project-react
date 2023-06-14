import React from 'react';
import Card from './Card';

//Gera a img do ícone para marcar tarefa
function DoneImg(props) {
    if (props.done) {
        return (<img className='icon' alt='done' src='./assets/checkmarkOn-circle.svg'></img>)
    } else {
        return (<img className='icon' alt='undone' src='./assets/checkmarkOff-circle.svg'></img>)
    }
}

//Gera o conteúdo do item.
//Gera o nome das tarefas
//Gera os botões de marcar e excluir
function ListItem(props) {
    return (
        <li >
            <Card className={props.item.done ? "done item" : "item"}>
                {/* {`${props.item.id + 1} - `} */}
                {props.item.text}
                <div>
                    <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={() => { props.onDeleteItem(props.item) }}><img className='icon' alt='delete' src="./assets/trash-bin.svg"></img></button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem;