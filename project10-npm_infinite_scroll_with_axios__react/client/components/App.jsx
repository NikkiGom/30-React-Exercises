import React from 'react';
import axios from 'axios';
import Infinite from 'react-infinite';
import Thumbnail from './thumbnail.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemon: [],
            isInfiniteLoading: false, 
            newArray: []
        }

        this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
        this.elementInfiniteLoad = this.elementInfiniteLoad.bind(this);
        this.loadPokemon = this.loadPokemon.bind(this);
    }

    componentDidMount() {
        this.loadPokemon(0, 10);
    }

    loadPokemon(start, end) {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => {

            var results = response.data.results.slice(start, end).map((item, i) => {
                return <Thumbnail key={item.name} name={item.name}/>
            });

            this.setState({
                pokemon: this.state.pokemon.concat(results),
                isInfiniteLoading: false
            })
        })
        .catch(function (error) {
        console.log(error);
        })
    }

    handleInfiniteLoad() {
        if(this.state.pokemon.length === 20) {
            return
        }

        var that = this;
        this.setState({
            isInfiniteLoading: true
        })
        setTimeout(function() {
            var elemLength = that.state.pokemon.length;
            that.loadPokemon(elemLength, elemLength + 5);
        }, 2500);
    }

    elementInfiniteLoad() {
        if(this.state.pokemon.length === 20) {
            return
        }
        
        return <div className="loading">Loading...</div>;
    }

    render() {
        return(
                <div>
                    <Infinite
                        elementHeight={120}
                        containerHeight={400}
                        infiniteLoadBeginEdgeOffset={10}
                        onInfiniteLoad={this.handleInfiniteLoad}
                        loadingSpinnerDelegate={this.elementInfiniteLoad()}
                        isInfiniteLoading={this.state.isInfiniteLoading}>
                    {this.state.pokemon}
                    </Infinite>
                </div>
        );
    }
}



