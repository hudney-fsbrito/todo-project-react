import React from "react";

//Gera os cartões dos itens
function Card(props) {
    return (
        <div className={props.className ? `${props.className} card` : "card"} >
            {props.children}
        </div>
    )
}

export default Card;