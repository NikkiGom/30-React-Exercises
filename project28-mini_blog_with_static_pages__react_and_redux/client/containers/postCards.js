import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostCard from '../components/postcard.js'

class PostCards extends React.Component {
    render() {
        var createCards = this.props.cards.map((card, i) => {
            return (
                <div style={{margin: '20px'}} key={i}>
                    <Link to={`/${card.title}`}>
                        <PostCard 
                            title={card.title} 
                            subtitle={card.subtitle} 
                            date={card.date} 
                            text={card.text} 
                            backgroundImage={card.image} 
                            detail={card.detail}/>
                    </Link>
                </div>
            );
        });
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>{createCards}</div>
        );
    };
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    };
}

export default connect(mapStateToProps)(PostCards);