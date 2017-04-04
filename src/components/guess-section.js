import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';

export function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm onGuess={props.onGuess} />
        </section>
    );
}

const mapStateToProps = (state, props) => ({
	feedback: state.feedback
	// guesses: state.guesses,
	// correctAnswer: props.correctAnswer
});

export default connect(mapStateToProps)(GuessSection);