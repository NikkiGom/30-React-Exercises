import React from 'react';
import { AnimatedBg, Transition } from 'scroll-background';

import BigBox from './bigBox.jsx';

export default class App extends React.Component {
    render() {
        var boxes = [];
        for (var i = 0; i < 51; i++) {
            boxes.push(<BigBox boxNumber={i} key={i} />);
        }
        return(
            <div className="container">
                <AnimatedBg>
                    <Transition from="#a379c9" to="#b744b8">
                    <div className="box-wrapper">
                    {boxes}
                    </div>
                    </Transition>
                    <Transition from="#b744b8" to="#a379c9">
                    <div className="box-wrapper">
                    {boxes}
                    </div>
                    </Transition>
                </AnimatedBg>
            </div>
        );
    }
}