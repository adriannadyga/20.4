import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	addText(event) {
		this.setState(
			{value: event.target.value}
		)
	}

	render() {
		return (
			<div className={style.addToList}>
				<button className={style.button} onClick={() => this.props.add(this.state.value)}>+</button>
				<input type="text" className={style.addToListInput} onChange={event => this.addText(event)} value={this.state.value} />
			</div>
		)
	}
}

export default TodoForm;