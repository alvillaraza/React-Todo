import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import chores from './data.js';
// import Todo from './components/TodoComponents/Todo';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      TodoList: chores
    }
  }

  toggleItem = clickedId => {
    const newTodoList = this.state.TodoList.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      TodoList: newTodoList
    });
  };

  addNewItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      TodoList: [...this.state.TodoList, newItem]
    });
  };

  filter = () => {
    this.setState({
      TodoList: this.state.TodoList.filter(item => !item.completed )
    });
  }

  render() {
    console.log(this.state.TodoList)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItem={this.addNewItem} />
        <TodoList chores={this.state.TodoList} toggleItem={this.toggleItem} filter={this.filter} />
        
      </div>
    );
  }
}

export default App;

// create an input box that is dynamic
// create a button to add to do
//create a button to clear the completed items