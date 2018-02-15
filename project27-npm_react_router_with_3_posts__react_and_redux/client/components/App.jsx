import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import ProjectCards from '../containers/project_cards.js';

import Project1 from '../components/project1.js';
import Project2 from '../components/project2.js';
import Project3 from '../components/project3.js';

class App extends React.Component{
    render() {
        const projects = {
            Project1,
            Project2,
            Project3
        };

        var createRoutes = this.props.projects.map((project, i) => {
            return <Route key={i} exact path={`/${project.title}`} exact component={projects[project.title]}/>
        });
        return (
            <Switch>
                <Route exact path="/" component={ProjectCards}/>
                {createRoutes}
            </Switch>
        );
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

export default withRouter(connect(mapStateToProps)(App));
