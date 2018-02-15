import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGiphs } from '../actions/index.js';
import Giph from '../components/giph.js';

class GiphWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
       e.preventDefault();  
       this.props.fetchGiphs(this.state.inputValue);
    }

    handleChange(e) {
        this.setState({inputValue: e.target.value})
    }

    render() {
        if(this.props.giphs !== null) {
            var renderGiphs = this.props.giphs.map((giph, i) => {
                return <Giph key={i} image={giph.images.original.url}/>;
            });
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.inputValue} 
                        onChange={this.handleChange}
                        type="text" 
                        placeholder="type something"
                    />
                </form>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {renderGiphs}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        giphs: state.giphs
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGiphs }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphWrapper)

