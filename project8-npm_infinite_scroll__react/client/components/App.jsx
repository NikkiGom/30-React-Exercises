import React from 'react';
import ListItem from './list-item.jsx';
import Infinite from 'react-infinite';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isInfiniteLoading: false,
            elements: this.buildElements(0, 20)
        }

        this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
        this.buildElements = this.buildElements.bind(this);
        this.elementInfiniteLoad = this.elementInfiniteLoad.bind(this);
    }

    handleInfiniteLoad() {
        var that = this;
        this.setState({
            isInfiniteLoading: true
        })
        setTimeout(function() {
            var elemLength = that.state.elements.length;
            var newElements = that.buildElements(elemLength, elemLength + 100);
            that.setState({
                isInfiniteLoading: false,
                elements: that.state.elements.concat(newElements)
            });
        }, 2500);
    }

    buildElements(start, end) {
        var elements = [];
        for(var i = start ; i < end ; i++) {
            elements.push(<ListItem key={i} num={i} />)
        }
        return elements;
    }

    elementInfiniteLoad() {
        return <div className="loading">Loading...</div>;
    }

    render() {
        return(
                <Infinite 
                    elementHeight={200}
                    containerHeight={400}
                    infiniteLoadBeginEdgeOffset={200}
                    onInfiniteLoad={this.handleInfiniteLoad}
                    loadingSpinnerDelegate={this.elementInfiniteLoad()}
                    isInfiniteLoading={this.state.isInfiniteLoading}>
                    {this.state.elements}
                </Infinite>
        );
    }
}

