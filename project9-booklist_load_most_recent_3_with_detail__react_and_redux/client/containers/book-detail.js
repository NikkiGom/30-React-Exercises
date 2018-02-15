import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component{
    render() {
        if(!this.props.book) {
            return <div className="bookSelect">Select a book to get started</div>
        }
        return (
            <div className="bookDetail">
                <div>{this.props.book.description}</div>
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