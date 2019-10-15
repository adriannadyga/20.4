import React from 'react';
import style from './TodoList.css';

const Todo = (props) => 
        <li className={style.onList} id={props.id}>{props.text}
            <button className={style.button} onClick={()=> props.delete(props.id)}>x</button>
        </li>

export default Todo;