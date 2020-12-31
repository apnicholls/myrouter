import React, { Component, createRef } from 'react'
// import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { uuid } from 'uuidv4';


export default class Items2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],    /*This sets the state for the task array*/
            selectedFilter: "all"  /*This sets the state for the filtering of the tasks (This was added to support the filter function)*/
        }

        this.taskRef = createRef(); /*This function adds new tasks called by add button in return*/
        this.handleAdd = () => {
            // console.log('handleAdd called')
            let task = this.taskRef.current.value
            this.setState({ tasks: [...this.state.tasks, { id: uuid(), task: task, done: false }] }) /*Done:false was added to support line-through also added id=uuid*/
        }
        this.handleDelete = (taskid) => { /*This function filters list based on ID=UUID and then returns everything not = to id*/
            this.setState({ tasks: this.state.tasks.filter((task) => { return taskid !== task.id }) })
        }
        this.handleLine = (id) => { /*is called by button in return and passed id. copies task.state and sets true false flags and then retunrs to original set state*/
            let newTasks = [...this.state.tasks]
            let task = newTasks.find(task => task.id === id)
            if (task.done === true) {
                task.done = false;
            } else {
                task.done = true;
            }
            this.setState({ tasks: [...newTasks] }) /*resets state.task to original*/
        }
        this.getFilteredTasks = () => {   /*filter function*/
            if (this.state.selectedFilter === "all") {
                return this.state.tasks /*keeps state.tasks the same as original*/
            } else if (this.state.selectedFilter === "p") {
                const completed = this.state.tasks.filter(function (task) {
                    if (task.done) {
                        return false;
                    } else {
                        return true;
                    }
                })
                return completed
            }
            else if (this.state.selectedFilter === "d") {
                const completed = this.state.tasks.filter(function (task) {
                    if (task.done) {
                        return true;
                    } else {
                        return false;
                    }
                })
                return completed
            }

        }
    }

    componentDidUpdate() {
        this.state.tasks.forEach((task) => {
            console.log(JSON.stringify(task))
        });
    }

    render() {
        return (
            <div>
                <form className="nuts">
                    <div style={{ position: 'relative' }}>
                        <button className="btn btn-success" id="a" type="button" onClick={this.handleAdd}>Add New Task</button>
                        <input className="input" type="text" ref={this.taskRef} placeholder="enter task" ></input>
                    </div>
                </form>
                {
                    this.getFilteredTasks().map((task, index) => {
                        if (task.done === true) {
                            // console.log(task.id + ' is true')
                            return (
                                <div className="w3-container">
                                    <div style={{ position: "relative" }} >
                                        <div key={task.id} style={{ 'text-decoration': 'line-through', 'color':"red"}}>
                                            {task.task}
                                        </div>
                                        <div className="left">
                                            <button type="button" onClick={() => { this.handleDelete(task.id) }} >Delete</button>
                                            <button type="button" onClick={() => { this.handleLine(task.id) }}>Done</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            console.log(task.id + ' is false')
                            return (
                                <div className="w3-container">
                                    <div style={{ position: "relative" }}>
                                        <div key={task.id}>
                                            {task.task}
                                        </div>
                                        <div className="left">
                                            <button type="button" onClick={() => { this.handleDelete(task.id) }}>Delete</button>
                                            <button type="button" onClick={() => { this.handleLine(task.id) }}>Done</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    })

                }
                <div>
                    <div className="btn-group" id="center">
                        <button onClick={() => this.setState({ ...this.state, selectedFilter: "all" })}>All</button>
                        <button onClick={() => this.setState({ ...this.state, selectedFilter: "p" })}>Pending</button>
                        <button onClick={() => this.setState({ ...this.state, selectedFilter: "d" })}>Completed</button>
                    </div>
                </div>
            </div>
        )
    }
}
