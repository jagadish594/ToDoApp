import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tasks: [],
    };
  }

  handleClick = () => {
    let tempArr = [...this.state.tasks];
    tempArr.push(this.state.value);
    this.setState({
      tasks: tempArr,
    });
  };

  handleInput = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleDelete = id => {
    let tempArr = [...this.state.tasks];
    tempArr.splice(id, 1);
    this.setState({
      tasks: tempArr,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInput}
          className="InputBoxStyle"
        />
        <button onClick={this.handleClick} className="ButtonStyleAdd">Add</button>
        <ListOfTasks tasks={this.state.tasks} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

const ListOfTasks = props => {
  return (
    <div>
      <h2>List of Tasks</h2>
      <ul>
        {props.tasks &&
          props.tasks.map((task, i) => {
            return (
              <li key={i}>
                <span className="TaskStyle">{task}</span>
                <span>
                  <button onClick={() => props.handleDelete(i)} className="ButtonStyleDelete">Delete</button>
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
