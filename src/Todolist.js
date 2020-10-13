import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import MyForm from './MyForm'
import MyList from './MyList'

function Todolist() {
  const taskRef = useRef();
  const [tasks, setTasks] = useState([])  
                                                // const tasks = [];  function setTasks() {}
  useEffect( ()=>{                              // called when Tasks updated
  }, [tasks])

  function handleClick() {  
    setTasks( [...tasks, taskRef.current.value])
  }

  return (
    <div className="App">
      <MyForm handleClick={handleClick} taskRef={taskRef}/>
      <MyList tasks={tasks} />
    </div>
  );
}

export default Todolist;

/* import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nbrs = [4,1,23,2,8,7,93,22,44,43]
  const colors = ['red', 'blue', 'green']
  for (let index=0; index< colors.length; index++) {
    let color = colors[index];
    console.log("OLD WAY:" + color);
  }
  colors.forEach( (color, index) => {
    console.log("NEW WAY:" + color + "," + index);
  })
  let nbrs2 = nbrs.map( (nbr) => {
    return nbr * 2;
  })
  nbrs2.forEach( (nbr) => {
    console.log( nbr);
  })
  let nbrs3 = nbrs.filter( (nbr) => {
    console.log(nbr, (nbr % 2 == 0))
    return nbr % 2 == 0;
  })
  nbrs3.forEach( (nbr) => { // [4,2,8,22,44]
    console.log( nbr);
  })
  return (
    <div className="App">
      {
         colors.map( (color, index) => {
          return <div key={index}>{color}</div>;
        })
      }   
    </div>
  );
}

export default App; */

/* console.log("App called")
console.log("useEffect:" + tasks); */
