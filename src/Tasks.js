import React, { useState } from "react";    // useState hook
import './Tasks.css';                       // Created a CSS file to handle the function component vs Class
import './App.css';                         
import {DatePicker, Space} from 'antd';     // component from antd  (npm install 'antd')
import {Tooltip} from 'antd';               // component from antd
import 'antd/dist/antd.css';                // component from antd

function Todo({ onChange, todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}  // If to do item iscompleted this puts a line through the text and the date //
      >
        <div> 
          <Tooltip placement="topLeft" title="Enter Due Date">  
            <DatePicker onChange={onChange} />
          </Tooltip>
        </div>
        {todo.text}
  
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>

      </div>
    );
  }
  
  function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");     // sets input field "state" to blank
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);       // adds input for the tod item
      setValue("");         // resets input field to be blank
    };
  
    return (
      <form onSubmit={handleSubmit}>                
        <Tooltip title="Enter a new task here">   
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        </Tooltip>
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

    const getCurrentDate = ()=>{
      var cDate = new Date().getDate();
      console.log(cDate)
    }


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
        <p>{totalTasks} </p>
      );
    }
    function CountDone () {
      const newToDos = allTodos.filter((todoItem) => todoItem.isCompleted === true)
      var totalTasks = newToDos.length;
      return (
        <p>{totalTasks} </p>
      );
    }
    function CountPending () {
      const newToDos = allTodos.filter((todoItem) => todoItem.isCompleted === false)
      var totalTasks = newToDos.length;
      return (
        <p>{totalTasks} </p>
      );
    }
    function onChange(date, dateString) {
      return (
        <space direction="vertical">
        <DatePicker onChange={onChange} />
        </space>
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
              <button type="button" className="btn btn-outline-primary" onClick= {filterToDoAll}>All Tasks: < Count /> </button>
              <button type="button" className="btn btn-outline-primary" onClick= {filterToDoDone}>Completed Tasks: <CountDone /></button>
              <button type="button" className="btn btn-outline-primary" onClick= {filterToDoPending}>Pending Tasks: <CountPending /></button>
          </div>
         
      </div>
    );
  }
  
  export default Tasks;
  
/*   <div className="Totals" >
  <h5><Count /> </h5>
  <h5><CountDone /> </h5>
  <h5><CountPending /> </h5>
</div> */