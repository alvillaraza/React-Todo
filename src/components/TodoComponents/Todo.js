import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log(props)
    return (
        <>
        <div onClick = {() => props.toggleItem(props.item.id)}
        className={`item${props.item.done ?' done' : ''}`}>
            <p>{props.item.task}</p>
        </div>
        </>
    )
}

export default Todo;