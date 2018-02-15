import React from 'react';
import axios from 'axios';

export default class NewsletterSubscrip extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            emailValueCollect: '',
            emailValueError: ''
        }

        this.emailValue = this.emailValue.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
        this.validate = this.validate.bind(this);
    }

    emailValue(e) {
        console.log(e.target.value)
        this.setState({emailValueCollect: e.target.value});
    }

    validate() {
        let isError = false;
        const errors = {};

        if(this.state.emailValueCollect.length < 12) {
            isError = true;
            errors.emailValueError = 'email must be at least 12 characters long'
        }

        if (isError) {
            console.log('there is an error')
            this.setState({
                ...this.state,
                ...errors
            });
        }

        return isError;
    }

    submitEmail(e) {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
            axios.post('https:www.sukipinoy.com/subscriptions.php', new FormData(document.getElementById('myForm')))
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
              this.setState({emailValueError: 'Oops, the email didnt send'});
            });

            this.setState({emailValueCollect: ''});
            this.setState({emailValueError: ''});
            
            console.log('sent!');
        }
    }

    render() {
        return(
            <div className='container'>
                <div>subscribe with email</div>
                <div>
                    <form id='myForm' onSubmit={this.submitEmail}>
                        <input 
                            value={this.state.emailValueCollect} 
                            onChange={this.emailValue} 
                            type="email"
                        />
                    </form>
                </div>
                <div style={{fontSize: '20px'}}>{this.state.emailValueError}</div>
            </div>
        );
    }
}
