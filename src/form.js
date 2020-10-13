import React from 'react';
import logo from './logo.svg';
import './App.css';

class Contact extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    eMail: "",
    comment:""
  }

  handleOnChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }

  render(){

      return (
        <div className="App">
            <form>
              <div>First Name:<input type = 'text' name = 'firstName' value = {this.state.firstName} onChange = {this.handleOnChange}/></div><br></br>
              <div>Last Name: <input type = 'text' name = 'lastName' value = {this.state.lastName} onChange = {this.handleOnChange}/></div> <br></br>
              <div>Email: <input type = 'text' name = 'eMail' value = {this.state.eMail} onChange = {this.handleOnChange}/> </div><br></br>
              <div>Comment: <input type = 'text' name = 'comment' value = {this.state.comment} onChange = {this.handleOnChange}/></div>
            </form>
            <button>Submit</button>
         </div>
         
        
      );
  }
}

export default Contact;






// import React, { Component } from 'react'

/* export default class Reservation extends Component {
          constructor(props) {
          super(props);
          this.state = {
            isGoing: true,
            numberOfGuests: 2
          };
      
          this.handleInputChange = this.handleInputChange.bind(this);
        }
      
        handleInputChange(event) {
          const target = event.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const name = target.name;
      
          this.setState({
            [name]: value
          });
        }
      
        render() {
          return (
            <form>
              <label>
                Is going:
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                Number of guests:
                <input
                  name="numberOfGuests"
                  type="number"
                  value={this.state.numberOfGuests}
                  onChange={this.handleInputChange} />
              </label>
            </form>
          );
        }
      }
 */