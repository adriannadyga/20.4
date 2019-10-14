import React from 'react';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
class App extends React.Component {
    constructor(props) {
        super(props);
        //początkowy stan aplikacji
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }
        ]
        };
    }

    //metoda dodawania nowych elementów
    addTodo(val) {
        const todo = {
            text: val,
            //właściwość id unikalna dla każdego obiektu todo
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        //metoda filter tworzy nową tablicę z odfiltrowanymi elementami
        const reminder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: reminder});
    }

    render() {
        const data = this.state.data;
        return (
            <div className={style.TodoApp}>
                <Title data={data}/>
                <TodoList data={data} delete={this.removeTodo.bind(this)}/>
            </div>
        );
    }
}

export default App;