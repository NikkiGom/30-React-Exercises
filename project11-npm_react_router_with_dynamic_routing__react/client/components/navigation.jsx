import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './homepage.jsx';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3.jsx';

export default class Navigation extends React.Component {
    render() {
        return(
            <div>
                <nav className="link-container">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/Page1"> Page 1</Link>
                    <Link className="link" to="/Page2"> Page 2</Link>
                    <Link className="link" to="/Page3"> Page 3</Link>
                </nav>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Page1" component={Page1}/>
                    <Route path="/Page2" component={Page2}/>
                    <Route path="/Page3" component={Page3}/>
                </div>
            </div>
        );
    }
}





