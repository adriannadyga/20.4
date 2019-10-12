import React from 'react';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const Todolist = this.props.data.map(item => 
            <li id={item.id} key={item.id}>{item.text}
            <button onClick={()=> this.props.delete(item.id)}>x</button>
            </li>);
        
        return (
            <div>
                <ul>{Todolist}</ul>
            </div>
        )
    }
}

export default Todolist;