import React, { useRef, useState, useEffect, createRef } from 'react';
import './App.css';
import {uuid} from 'uuidv4';
import  {Link} from 'react-router-dom';


function List() {

  const nameRef = useRef();
  const employedRef = useRef();
  const [employees, setEmployees] = useState([]); // const employees = []
  let nameRefs=[]
  function employeesUpdateHandler() {
    employees.forEach((employee, index) => {
      console.log(JSON.stringify(employee));
    });
  }
  useEffect(employeesUpdateHandler, [employees]);
  function addEmployee() {
    console.log('addEmployee called');
    let name = nameRef.current.value;
    let employed = employedRef.current.checked;
    console.log(name + "," + employed);
    setEmployees([...employees, {'id': uuid(), 'name': name, 'employed': employed }])
  }
  function handleOnChange ( id) {
    console.log('handleOnChange id=' +id)
    let newEmployees = [...employees]
    //newEmployees[id].employed = !newEmployees[id].employed;
    let employee = newEmployees.find((employee) => employee.id === id)
    employee.employed = !employee.employed;
    setEmployees(newEmployees)
  }
  function handleNameChange ( id, ref) {
    console.log('handleNameChange id=' +id)
    let newEmployees = [...employees]
    //newEmployees[id].employed = !newEmployees[id].employed;
    let employee = newEmployees.find((employee) => employee.id === id)
    let name = ref.current.value;
    employee.name = name;
    setEmployees(newEmployees)
  }

  return (
    <div className="App">
      <form>
        <div>Name <input ref={nameRef} type="text" /></div>
        <div>Employed<input ref={employedRef} type="checkbox" /></div>
        <div><button type="button" onClick={addEmployee} >Add</button></div>
      </form>
      <div>
        {
          employees.map( (employee, index) => {
            nameRefs[index] = React.createRef();
            let employed = (employee.employed) ? "true" : "false"
            if (employee.employed) 
              return (
                <div key={index}>
                  <input type="text" ref={nameRefs[index]} 
                    onChange={() => {handleNameChange(employee.id, nameRefs[index])}} defaultValue={employee.name} />
                  <input type="checkbox" onChange={() => {handleOnChange(employee.id)}} defaultChecked/>
                </div>
              )
            else
              return (
                <div key={index}>
                  <input type="text" ref={nameRefs[index]} 
                    onChange={() => {handleNameChange(employee.id, nameRefs[index])}} defaultValue={employee.name} />
                  <input type="checkbox" onChange={() => {handleOnChange(employee.id)}} />
                </div>
              )            
          })
        }
      </div>
    </div>
  );
}

export default List;
