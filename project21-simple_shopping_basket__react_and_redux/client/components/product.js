import React from 'react';

export default class Product extends React.Component {
    render() {
        return (
            <li>
                <div style={{margin: '30px'}}>
                    <div>
                        <span>name </span><span>{this.props.title}</span>
                    </div>
                    <div>
                        <span>price </span><span>{this.props.price}</span>
                    </div>
                    <div>
                        <span onClick={this.props.addProductSetUp}>+ </span>
                        <span onClick={this.props.subtractProductSetUp}>-</span>
                    </div>
                </div>
            </li>
        );
    }
}
