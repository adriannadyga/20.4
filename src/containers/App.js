import React from 'react';
import style from './App.css';
import Title from '../components/Title.js';
class App extends React.Component {
    constructor(props) {
        super(props);
        //początkowy stan aplikacji
        this.state = {
            data: []
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
        return (
            <div className={style.TodoApp}>
                <Title data={this.state.data}/>
            </div>
        );
    }
}

export default App;