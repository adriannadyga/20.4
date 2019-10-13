import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div>
                <div className={style.title}>
                    Todo list React app
                </div>
                <p className={style.taskNumber}>Number of tasks to do: {this.props.data.length}</p>
            </div>
        )
    }
}

export default Title;