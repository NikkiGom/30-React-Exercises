import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index.js';

class BookList extends React.Component {
    render() {
        var createBookList = this.props.books.slice(0, 3).map((book) => {
            return <li className='bookItem' key={book.title} onClick={() => this.props.selectBook(book)}>{book.title}, post {book.count}</li>
        });
        
        return(
            <ul className="container">{createBookList}</ul>
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







