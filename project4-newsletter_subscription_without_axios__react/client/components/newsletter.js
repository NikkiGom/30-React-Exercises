import React from 'react';

export default class NewsletterSubscrip extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            emailValueCollect: '',
            emailValueError: '',
            sentMessage: ''
        }

        this.emailValue = this.emailValue.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
        this.validate = this.validate.bind(this);
    }

    emailValue(e) {
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
            this.setState({
                emailValueCollect: '',
                emailValueError: '',
                sentMessage: 'Sent!'
            })
        }
    }

    render() {
        return(
            <div className='container'>
                <div>subscribe with email</div>
                <div>
                    <form onSubmit={this.submitEmail}>
                        <input 
                            value={this.state.emailValueCollect} 
                            onChange={this.emailValue} 
                            className='subscription-input' 
                            type="email"
                        />
                    </form>
                </div>
                <div>{this.state.emailValueError}</div>
                <div>{this.state.sentMessage}</div>
            </div>
        );
    }
}
