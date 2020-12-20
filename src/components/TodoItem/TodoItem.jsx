import React, { Component } from "react";
import { connect } from "react-redux";
import "./todo.css";
import { deleteTodoAction } from "../../actions/deleteTodoAction";

class TodoItem extends Component {
  render() {
    return (
      <div className="to-do">
        <span className="to-do-name">{this.props.item.workName}</span>
        <span className="space"></span>
        <button
          className="to-do-delete"
          onClick={() => {
            this.props.deleteTodoById(this.props.index);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTodoById: id => dispatch(deleteTodoAction(id))
});

export default connect(null, mapDispatchToProps)(TodoItem);
//export default connect(null, { deleteTodoById: deleteTodoAction })(TodoItem);
