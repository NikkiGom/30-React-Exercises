import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component{
    render() {
        if(!this.props.book) {
            return <div className="container">Select a book to get started</div>
        }
        return (
            <div className="container">
                <div style={{padding: '20px', fontSize: '15px'}}>
                    Summary: {this.props.book.summary}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);