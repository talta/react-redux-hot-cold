import React from 'react';
import {connect} from 'react-redux';
import {guessResponse} from '../actions';

export class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(guessResponse(value))
        // this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100)} required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

const MapStateToProps = (state, props) => ({
    guessCount: state.guesses.length,
    correctAnswer:state.correctAnswer
});

export default connect(MapStateToProps)(GuessForm);