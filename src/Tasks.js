import React, { useState } from "react";
import './Tasks.css';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
  
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }
  
  function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }
  
  function Tasks() {
    const [allTodos, setallTodos] = useState([
      {
        text: "Learn about React",
        isCompleted: false
      },
      {
        text: "Play Golf",
        isCompleted: false
      },
      {
        text: "Workout",
        isCompleted: false
      }
    ]);
  
    const [todos, setTodos] = useState([
      {
        text: "Learn about React",
        isCompleted: false
      },
      {
        text: "Play Golf",
        isCompleted: false
      },
      {
        text: "Workout",
        isCompleted: false
      }
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, { text, isCompleted: false}];
      setTodos(newTodos);
      setallTodos(newTodos);
    };
  
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
      setallTodos(newTodos);
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
      setallTodos(newTodos);
    };


   function filterToDoDone () {
      const newTodos = allTodos.filter((todoItem) => todoItem.isCompleted === true)
      setTodos(newTodos);
    };
  
    function filterToDoPending () {
      const newTodos = allTodos.filter((todoItem) => todoItem.isCompleted === false)
      setTodos(newTodos);
    };
  
    function filterToDoAll () {
      setTodos(allTodos);
    };

    function Count () {
      const newToDos = [...todos]
      var totalTasks = newToDos.length;
      return (
        <p>Total Tasks = {totalTasks} </p>
      );
    }
    function CountDone () {
      const newToDos = allTodos.filter((todoItem) => todoItem.isCompleted === true)
      var totalTasks = newToDos.length;
      return (
        <p>Total Completed Tasks = {totalTasks} </p>
      );
    }
    function CountPending () {
      const newToDos = allTodos.filter((todoItem) => todoItem.isCompleted === false)
      var totalTasks = newToDos.length;
      return (
        <p>Total Pending Tasks = {totalTasks} </p>
      );
    }
  
    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
          <div className="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" className="btn btn-outline-primary" onClick= {filterToDoAll}>All Tasks</button>
              <button type="button" className="btn btn-outline-primary" onClick= {filterToDoDone}>Completed Tasks</button>
              <button type="button" className="btn btn-outline-primary" onClick= {filterToDoPending}>Pending Tasks</button>
          </div>
          
          <div>
            <h3><Count /> </h3>
            <h3><CountDone /> </h3>
            <h3><CountPending /> </h3>

          </div>

      </div>
    );
  }
  
  export default Tasks;
  
