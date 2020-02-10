import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
// import Todo from './components/TodoComponents/Todo';

const chores = [
  {
    task: 'do groceries',
    id: 568432215,
    completed: false
  },
  {
    task: 'deposit check',
    id: 1687613549,
    completed: false
  }
];
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
          done: !item.done
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
      purchased: false
    };
    this.setState({
      TodoList: [...this.state.TodoList, newItem]
    });
  };
  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItem={this.addNewItem} />
        <TodoList chores={this.state.TodoList} toggleItem={this.toggleItem} />
        
      </div>
    );
  }
}

export default App;

// create an input box that is dynamic
// create a button to add to do
//create a button to clear the completed items