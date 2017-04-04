import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


import {guessResponse} from '../actions';

export class Game extends React.Component {

    newGame() {
        this.setState({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100)
        });
        // this.props.dispatch(newGame());
    }

    guess(guess) {
        this.props.dispactch(guessResponse(guess));
    }

    render() {
        return (
            <div>
                <Header />
                <GuessSection />
                <GuessCount />
                <GuessList  />
            </div>
        );
    }
}

const mapStateToProps = (state, props) =>({
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);

