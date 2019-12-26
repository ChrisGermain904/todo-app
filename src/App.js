import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Todo from "./Todo";
import TodoForm from "./TodoForm";
 
export default function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React Hooks", isCompleted: false },
    { text: "Take a Drive", isCompleted: false },
    { text: "Play some games", isCompleted: false }
  ]);
 
   const handleAddTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleComplete = index => {
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    setTodos(newToDos);
  };
 
  const handleUnfinished = index => {
    const newToDos = [...todos];
    newToDos[index].isCompleted = false;
    setTodos(newToDos);
  };

  const handleDelete = index => {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setTodos(newToDos);
  };
 
 
  return (
    <React.Fragment>
      {todos.map((todo, index) => (
        <Todo
          todo={todo}
          key={index}
          onComplete={handleComplete}
          index={index}
          onUnfinished={handleUnfinished}
          onDelete={handleDelete}
        />
      ))}
      <div>
      <TodoForm handleAddTodo={handleAddTodo} />
      </div>
    </React.Fragment>
  );
}