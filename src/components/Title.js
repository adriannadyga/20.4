import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div>
                <div className="title">
                    Todo list React app
                </div>
                <p className="taskNumber">Number of tasks to do: {this.props.data.length}</p>
            </div>
        )
    }
}

export default Title;