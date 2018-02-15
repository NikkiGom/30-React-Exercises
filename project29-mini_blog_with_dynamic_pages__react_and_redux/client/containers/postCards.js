import React from 'react';
import { connect } from 'react-redux';
import PostCard from '../components/postCard.js';
import { Link } from 'react-router-dom';

class PostCards extends React.Component {
    render() {
        var createCards = this.props.cards.map((card, i) => {
            return (
                <div key={i}>
                    <Link to={`/${card.id}`}>
                        <PostCard 
                            title={card.title}
                            subtitle={card.subtitle}
                            date={card.date}
                            text={card.text}
                            backgroundImage={card.image} 
                            detail={card.detail}
                        />
                    </Link>
                </div>
            );
        });
        return (
            <div style={{
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'space-around',
                margin: '30px'
            }}>
                {createCards}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    };
}

export default connect(mapStateToProps)(PostCards);

