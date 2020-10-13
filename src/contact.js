import React from 'react';
import './App.css';
import ContactTest from './ContactTest';

class Contact extends React.Component {

/*   state = {
    firstName: '',
    lastName: '',
    eMail: "",
    comment:""
  }

  handleOnChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  } */

  render(){

      return (
        <div className="App">
{/*             <form>
              <div>First Name:<input type = 'text' name = 'firstName' value = {this.state.firstName} onChange = {this.handleOnChange}/></div><br></br>
              <div>Last Name: <input type = 'text' name = 'lastName' value = {this.state.lastName} onChange = {this.handleOnChange}/></div> <br></br>
              <div>Email: <input type = 'text' name = 'eMail' value = {this.state.eMail} onChange = {this.handleOnChange}/> </div><br></br>
              <div>Comment: <input type = 'text' name = 'comment' value = {this.state.comment} onChange = {this.handleOnChange}/></div>
            </form>
            <button>Submit</button> */}
            <ContactTest/>
         </div>
        
      );
  }
}

export default Contact;