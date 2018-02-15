import { combineReducers } from 'redux';
import ProjectsReducer from './projects_reducer.js';

const rootReducer = combineReducers({
    projects: ProjectsReducer
});

export default rootReducer;