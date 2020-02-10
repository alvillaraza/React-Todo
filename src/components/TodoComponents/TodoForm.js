import React, {Component} from 'react';

//create a class to add a to do
// create a handle for on Change
// create a submit
//create a form with 2 buttons

class ToDoForm extends Component {
    constructor() {
        super();
        this.state = {
            newItem: '',
        };
    }

    handleChanges = e => {
        this.setState({
            newItem: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
        this.setState({ newItem: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='newItem' value={this.state.newItem} onChange={this.handleChanges} />
                <button>Add To Do</button>
            </form>
        );
    }
}

export default ToDoForm;