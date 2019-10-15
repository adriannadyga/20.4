import React from 'react';
import Todo from './Todo.js';
// import style from './TodoList.css';

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
    const todoListElements = props.data.map(item => <Todo id={item.id} key={item.id} delete={props.delete} text={item.text} />)
    return (
        <ul>
            {todoListElements}
        </ul>
    );
}
export default TodoList;