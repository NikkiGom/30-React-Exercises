import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/project_card.js';
import Project1 from '../components/project1.js';

class ProjectCards extends React.Component {
    render() {
        var projectCards = this.props.projects.map((project, i) => {
            return (
                <div key={i}>
                    <Link to={`/${project.title}`}>
                        <ProjectCard title={project.title} date={project.date} focus={project.focus}/>
                    </Link>
                </div>
            );
        });
        return (
            <div>{projectCards}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

export default connect(mapStateToProps)(ProjectCards);