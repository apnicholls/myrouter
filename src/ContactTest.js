import React from 'react';
import './App.css';
import './ContactTest.css';


class ContactTest extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        eMail: "",
        comment: ""
    }

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        
    }

    render() {

        return (
            <div>
                <h2>Contact Form</h2>
                <div className="container">
                    <form action="https://formspree.io/f/xjvpyzwl" method="POST">
                        <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstName" placeholder="Your name.." 
                                value={this.state.firstName} onChange={this.handleOnChange} />
                        <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastName" placeholder="Your last name.." 
                                value={this.state.lastName} onChange={this.handleOnChange} />
                        <label for="lname">Email</label>
                            <input type="text" id="email" name="eMail" placeholder="Your email.." 
                                value={this.state.eMail} onChange={this.handleOnChange} />
                        <label for="subject">Subject</label>
                            <textarea id="comment" name="comment" placeholder="Write something.." 
                                value={this.state.comment} onChange={this.handleOnChange} />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div >
        );
    }
}

export default ContactTest;

