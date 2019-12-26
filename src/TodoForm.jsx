import React, { useState } from "react";
 
export default function TodoForm({handleAddTodo}) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      handleAddTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Type then hit *Enter*"
        />
      </form>
    );
  }