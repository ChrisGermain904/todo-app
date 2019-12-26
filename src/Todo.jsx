import React from "react";
 
function Todo({ todo, index, onComplete, onUnfinished, onDelete }) {
  return (
    <React.Fragment>
      <div key={index} className="card mb-3">
        <div className="card-body">
          <h6
            className="card-title"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          >
            {todo.text}
          </h6>
          <button 
            onClick={() => onComplete(index)} 
            className="btn btn-success btn-sm"
          >
            Mark Complete
          </button>{" "}
          <button
            onClick={() => onUnfinished(index)}
            className="btn btn-secondary btn-sm"
          >
            Mark Unfinished
          </button>{" "}
          <button
          onClick={() => onDelete(index)}
          className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
 
export default Todo;