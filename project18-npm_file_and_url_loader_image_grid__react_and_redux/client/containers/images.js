import React from 'react';
import { connect } from 'react-redux';
import Image from '../components/image.js';

class Images extends React.Component {
    render() {

        const createGrid = this.props.images.map((image, i) => {
            return <Image 
                image={image.imageId}
                source={image.source}
                key={i}
            />
        });
        
        return(
            <div className="container">
                <div className="header">A grid of images</div>
                <div style={{
                    display: 'flex', 
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}>{createGrid}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        images: state.images
    };
}

export default connect(mapStateToProps)(Images)
