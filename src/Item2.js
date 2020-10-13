import React, { Component, createRef } from 'react'
import './App.css';
import { uuid } from 'uuidv4'

export default class Items2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],    /*This sets the state for the task array*/
            selectedFilter: "all"  /*This sets the state for the filtering of the tasks (This was added to support the filter function)*/
        }

        this.taskRef = createRef(); /*Thus function adds new tasks called by add button in return*/
        this.handleAdd = () => {
            console.log('handleAdd called')
            let task = this.taskRef.current.value
            this.setState({ tasks: [...this.state.tasks, { id: uuid(), task: task, done: false }] }) /*Done:false was added to support line-through*/
        }
        this.handleDelete = () => { /*Thus function copies task lists , removes item based on UUID and then resets state back to original state*/
            let copyTasks = Object.assign([], this.state.tasks)
            copyTasks.splice(uuid, 1)
            this.setState({ tasks: copyTasks })
        }
        this.handleLine = (id) => { /*is called by buton in return and passed id. copies task.state and sets true false flags and then retunrs to original set state*/
            let newTasks = [...this.state.tasks]
            let task = newTasks.find(task => task.id === id)
            if (task.done === true) {
                task.done = false;
            } else {
                task.done = true;
            }
            this.setState({ tasks: [...newTasks] }) /*again resets state.task to original*/
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
                <h3>Task List</h3>
                <form>
                    <input type="text" ref={this.taskRef} placeholder="enter task" />
                    <button type="button" onClick={this.handleAdd}>Add</button>
                </form>
                {
                    this.getFilteredTasks().map((task, index) => {
                        if (task.done === true) {
                            console.log(task.id + ' is true')
                            return (
                                <div>
                                    <div key={task.id} style={{ 'text-decoration': 'line-through' }}>
                                        {task.task}
                                    </div>
                                    <button type="button" onClick={this.handleDelete}>Delete</button>
                                    <button type="button" onClick={() => { this.handleLine(task.id) }}>Done</button>
                                </div>
                            )
                        }
                        else {
                            console.log(task.id + ' is false')
                            return (
                                <div>
                                    <div key={task.id}>
                                        {task.task}
                                    </div>
                                    <button type="button" onClick={this.handleDelete}>Delete</button>
                                    <button type="button" onClick={() => { this.handleLine(task.id) }}>Done</button>
                                </div>
                            )
                        }

                    })
                }
                <div class="btn-group" id="center">
                    <button onClick={() => this.setState({...this.state, selectedFilter: "all"}) }>All</button>
                    <button onClick={() => this.setState({...this.state, selectedFilter: "p"}) }>Pending</button>
                    <button onClick={() => this.setState({...this.state, selectedFilter: "d"}) }>Completed</button>
                </div>
            </div>
        )
    }
}
