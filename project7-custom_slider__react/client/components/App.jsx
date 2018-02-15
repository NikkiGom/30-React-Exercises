import React from 'react';
import Slide from './slide.jsx';
import ClickPrevious from './clickPrevious.jsx';
import ClickNext from './clickNext.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                    images: ['url("../client/images/image1.jpg")', 
                        'url("../client/images/image2.jpg")', 
                        'url("../client/images/image3.jpg")'
                        ], 
                    translateValue: 0, 
                    index: 0
        }

        this.renderSlides = this.renderSlides.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.slideWidth = this.slideWidth.bind(this);
    }

    renderSlides() {
        const images = this.state.images;
        let slides = []
    
        for(let i = 0; i < images.length; i++)
          slides.push(<Slide key={i} image={images[i]} />)
    
        return slides
    }

    handleClickPrevious() {
        if(this.state.index === 0)
        return 

        this.setState({
            translateValue: this.state.translateValue += this.slideWidth(),
            index: this.state.index -= 1
        })
    }

    handleClickNext() {
        const { images } = this.state
        
        if(this.state.index === images.length - 1)
            return

        this.setState({
            translateValue: this.state.translateValue -= this.slideWidth(),
            index: this.state.index += 1
        })
    }

    slideWidth() {
        const slide = document.querySelector('.slide')
        return slide.clientWidth
    }

    render() {
        const { translateValue } = this.state
        return(
            <div className='slider'>
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${translateValue}px)`,
                        transition: 'transform ease-out 0.3s'
                    }}>
                    { this.renderSlides() }
                </div>

                <ClickPrevious slideRight={this.handleClickPrevious}/>
                <ClickNext slideLeft={this.handleClickNext}/>
            </div>
        );
    }
}

