import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index.js';

class BookList extends React.Component {
    render() {
        var createBookList = this.props.books.map((book) => {
            return <li className="book" key={book.title} onClick={() => this.props.selectBook(book)}>{book.title}</li>
        });
        
        return(
            <div className="container">
                <ul className="booklist">{createBookList}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook : selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);



