import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            firstNameError: '',
            lastName: '',
            lastNameError: '',
            email: '',
            emailError: '',
            message: '',
            messageError: '',
            networkError:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.change = this.change.bind(this);
        this.validate = this.validate.bind(this);
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const err = this.validate();

        if(!err) {
            axios.post('/user', new FormData(document.getElementById(contactForm)))
              .then((response) => {
                console.log(response);

              })
              .catch((error) => {
                this.setState({networkError: 'oops, there was a network error'});
              });

              this.setState({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
              });
        }
    }

    validate() {
        let isError = false
        const errors = {
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            messageError: '',
            networkError: ''
        };

        if(this.state.firstName.length < 5) {
            isError = true;
            errors.firstNameError = 'Your first name must be at least 5 characters long'
        }

        if(this.state.lastName.length < 5) {
            isError = true;
            errors.lastNameError = 'Your last name must be at least 5 characters long'
        }

        if(this.state.email.length < 12) {
            isError = true;
            errors.emailError = 'Your email must be at least 12 characters long'
        }

        if(this.state.message.length < 10) {
            isError = true;
            errors.messageError = 'Your message must be at least 10 characters long'
        }

            this.setState({
                ...this.state,
                ...errors
        });

        return isError;
    }

    render() {
        return(
            <div className='container'>
                <form id="contactForm">
                    <div>
                        <label>First Name</label>
                        <input 
                            name="firstName"
                            value={this.state.firstName} 
                            type="text"
                            onChange={this.change}
                        />
                        <div className="error">{this.state.firstNameError}</div>
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input 
                            name="lastName"
                            value={this.state.lastName} 
                            type="text"
                            onChange={this.change}
                        />
                        <div className="error">{this.state.lastNameError}</div>
                    </div>

                    <div>
                        <label>E-mail Address</label>
                        <input 
                            name="email"
                            value={this.state.email} 
                            type="email"
                            onChange={this.change}
                        />
                        <div className="error">{this.state.emailError}</div>
                    </div>

                    <div>
                        <label>Leave your message here</label>
                        <textarea 
                            name="message"
                            value={this.state.message} 
                            type="text"
                            onChange={this.change} >
                        </textarea>
                        <div className="error">{this.state.messageError}</div>
                    </div>

                    <div>
                        <button onClick={this.handleSubmit} name="submit">Submit</button>
                    </div>

                    <div>{this.state.networkError}</div>
                </form>
            </div>
        );
    }
}



