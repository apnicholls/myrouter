import React from 'react'

export default function MyForm(props) {
    return (
        <div id="inputtask">
            <input type='text' placeholder="Add Task" ref={props.taskRef} />
            <button onClick={props.handleClick}>Add Task</button>
        </div>
    )
}
