import React from 'react';

import Header from './header.js';
import NavBar from './navbar.js';
import MyTabs from './tabs.js';
import Form from './form.js';
import Images from './images.js';
import Thumbnails from './Thumbnails.js';
import CarouselItem from './Carousel.js';

const App = () => {
    return(
        <div>
            <NavBar />
            <Header />
            <MyTabs />
            <Form />
            <Images />
            <Thumbnails />
            <CarouselItem />
        </div>
    );
}

export default App;