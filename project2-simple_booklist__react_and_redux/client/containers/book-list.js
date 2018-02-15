import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
    render() {
        var createBookList = this.props.books.map((book, i) => {
            return <li className="book" key={i}>{book.title}</li>
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

export default connect(mapStateToProps)(BookList)


