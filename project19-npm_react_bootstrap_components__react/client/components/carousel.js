import React from 'react';
import { Grid, Row, Carousel } from 'react-bootstrap';

const CarouselItem = () => {
    return(
        <Grid>
            <Carousel style={{marginTop: '50px', width: '900px', height: '555px'}}>
                <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="../client/images/image1.jpg" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="../client/images/image1.jpg" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="../client/images/image1.jpg" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Grid>
    );
}

export default CarouselItem;