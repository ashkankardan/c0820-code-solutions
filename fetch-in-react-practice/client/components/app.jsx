import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {

    fetch('api/todos')
      .then(res => res.json())
      .then(todos => {
        this.setState({
          todos
        });
      });
  }

  addTodo(newTodo) {

    const newTodoStr = JSON.stringify(newTodo);

    fetch('api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newTodoStr
    })
      .then(res => res.json())
      .then(data => {
        const newTodosArr = this.state.todos.slice();
        newTodosArr.push(data);
        this.setState({
          todos: newTodosArr
        });
      }
      );
  }

  toggleCompleted(todoId) {

    const tempTodoData = this.state.todos.slice();
    const todoItem = tempTodoData.filter(obj => obj.id === todoId)[0];
    const todoItemIndex = tempTodoData.indexOf(todoItem);
    todoItem.isCompleted = !todoItem.isCompleted;
    const todoItemStr = JSON.stringify(todoItem);

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: todoItemStr
    })
      .then(res => res.json())
      .then(data => {
        tempTodoData.splice(todoItemIndex, 1, data);
        this.setState({
          todos: tempTodoData
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
