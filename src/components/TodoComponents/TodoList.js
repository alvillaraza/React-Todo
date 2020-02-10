// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component {
    constructor(props){
        super(props);
        
    }
    

 

  render () {
    return (
        <div>
            {this.props.chores.map(item => (
            
                <Todo key={item.id} item={item} toggleItem={this.props.toggleItem} />
                
            ))}
            <button onClick={this.props.filter} >
                Clear Done
            </button>
        </div>
    )
}
}

export default TodoList;