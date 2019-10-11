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
                <p className="taskNumber">{this.props.data.length}</p>
            </div>
        )
    }
}

export default Title;