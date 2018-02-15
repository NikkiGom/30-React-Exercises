import React from 'react';
import NoteInput from '../containers/note_input.js';
import NoteOutput from '../containers/note_output.js';

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <NoteInput />
                <NoteOutput />
            </div>
        );
    }
}