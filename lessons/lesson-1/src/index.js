import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let id = 0;

function getTodoId() {
  id += 1;
  return id;
}

class App extends PureComponent {
  state = {
    inputValue: '',
    todos: [
      {
        id: 0,
        value: 'Сходить за продуктами',
        done: true
      }
    ]
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({inputValue: value});
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {inputValue, todos} = this.state;
      const newTodo = {value: inputValue, done: false, id: getTodoId()};

      this.setState({inputValue: '', todos: [...todos, newTodo]});
    }
  };

  handleClickCheckbox = id => {
    this.setState(state => ({
      todos: state.todos.map(
        todo => (id === todo.id ? {...todo, done: !todo.done} : todo)
      )
    }));
  };

  handleDelete = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => id !== todo.id)
    }));
  };

  render() {
    const {inputValue, todos} = this.state;

    return (
      <div className="container">
        <input
          value={inputValue}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="input"
        />
        <div>
          {todos.map(todo => (
            <Todo
              onChange={this.handleClickCheckbox}
              onDelete={this.handleDelete}
              key={todo.id}
              id={todo.id}
              text={todo.value}
              done={todo.done}
            />
          ))}
        </div>
      </div>
    );
  }
}

class Todo extends PureComponent {
  handleChange = () => {
    const {id, onChange} = this.props;
    onChange(id);
  };

  handleDelete = () => {
    const {id, onDelete} = this.props;
    onDelete(id);
  };

  render() {
    const {text, done} = this.props;
    return (
      <div className="todo-container" data-id={id}>
        <input type="checkbox" checked={done} onChange={this.handleChange} />
        <span className={done ? 'line-through' : ''}>{text}</span>
        <span
          onClick={this.handleDelete}
          className="delete-button"
        >
          X
        </span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


// import React, {PureComponent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// let id = 0;
// function getTodoId() {
//   id += 1;
//   return id;
// }

// class App extends PureComponent {
//   state = {
//     inputValue: 'Список дел',
//     todos: [
//       {
//         id: 0,
//         value: 'test',
//         done: false
//       }
//     ]
//   };
//   handleChange = event => {
//     //console.info(event.target.value);
//     const value = event.target.value;
//     this.setState({inputValue: value});
//   };
//   handleKeyDown = event => {
//     if (event.keyDawn === 13) {
//       const {inputValue, todos} = this.state;
//       const newTodo = {value: inputValue, done: false, id: getTodoId};
//       this.setState({inputValue: '', todos: [...todos, newTodo]});
//     }
//   };
//   render() {
//     console.log(this.state);
//     const {inputValue} = this.state;
//     return (
//       <div className='container'>
//         <input 
//           value={inputValue}
//           onChange={this.handleChange}
//           onKeyDown={this.handleKeyDown}
//           className='input'
//         />
//         <div>
//           {todos.map(todo => (
//             <Todo key={todo.id} text={todo.value} done={todo.done} />
//           ))}
//         </div>
//       </div>
//     )
//   }
// }

// class Todo extends PureComponent {
//   render() {
//     const {text} = this.props;
//     return <div>{text}</div>
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// // class Time extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <p>Hello!</p>
// //         <p>{new Date().toString()}</p>
// //       </div>
// //     );
// //   }
// // }

// // setInterval(() => {
// //   ReactDOM.render(<Time/>, document.getElementById('root'));
// // }, 1000);

// // const Time = () => (
// //   <div>
// //     <p>Hello!</p>
// //     <p>{new Date().toString()}</p>
// //   </div>
// // );

// // setInterval(() => {
// //   ReactDOM.render(Time(), document.getElementById('root'));
// // }, 1000);
