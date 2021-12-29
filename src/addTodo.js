import React from "react";

class AddTodo extends React.Component {
  state = {
    content: "",
  };
  haddleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  haddleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
        content: ""
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={(e)=>this.haddleSubmit(e)}>
          <label>Add Todo:</label>
          <input
            type="text"
            onChange={(e)=>this.haddleChange(e)}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
