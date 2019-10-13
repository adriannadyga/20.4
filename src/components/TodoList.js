import React from 'react';
import style from './TodoList.css';

// class TodoList extends React.Component {
//     constructor(props) {
//         super(props);
//     };
//     render() {
//         const Todolist = this.props.data.map(item => 
//             <li className={style.onList} id={item.id} key={item.id}>{item.text}
//             <button className={style.button} onClick={()=> this.props.delete(item.id)}>x</button>
//             </li>);
        
//         return (
//             <div>
//                 <ul>{Todolist}</ul>
//             </div>
//         )
//     }
// }

const TodoList = (props) => {
    return (
        <ul>
            {props.data.map(item => {
                return <li className={style.onList} key={item.id}>{item.text}
                <button className={style.button} onClick={()=> props.delete(item.id)}>x</button>
                </li>
            })}
        </ul>
    );
}

export default TodoList;