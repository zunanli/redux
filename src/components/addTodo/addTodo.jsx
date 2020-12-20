import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodoAction } from "../../actions/addTodoAction";

class AddTodo extends Component {
  addTodo(event) {
    if (event.key === "Enter") {
      this.props.addTodo({ workName: event.target.value });
      event.target.value = null;
    }
  }

  render() {
    return (
      <input
        type="text"
        className="search"
        placeholder="Enter Your Work Here"
        onKeyDown={event => this.addTodo(event)}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodoAction(text))
});

export default connect(null, mapDispatchToProps)(AddTodo);
// export default connect(null, { addTodo: addTodoAction })(AddTodo);
