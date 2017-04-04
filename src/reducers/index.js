

import * as actions from '../actions';


const initialState = {
	guesses: [45, 46, 47, 48],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModal: false
};

export function gameReducer (state, action){
		state = state || initialState;

		if(action.type ===actions.ON_INFO){
			state = Object.assign({}, state, 
				{showInfoModal: true});
			return state;
		}

		else if(action.type === actions.GUESS_RESPONSE){
			const guess = parseInt(action.guess, 10);
	        if (isNaN(guess)) {
	            state = Object.assign({}, state, 
	            	{feedback: 'Please enter a valid number'
	        	});
	            return state;
        	}
	        const difference = Math.abs(guess - state.correctAnswer);

	        let feedback;
	        if (difference >= 50) {
	            feedback = 'You\'re Ice Cold...';
	        }
	        else if (difference >= 30) {
	            feedback = 'You\'re Cold...';
	        }
	        else if (difference >= 10) {
	            feedback = 'You\'re Warm';
	        }
	        else if (difference >= 1) {
	            feedback = 'You\'re Hot!';
	        }
	        else {
	            feedback = 'You got it!';
	        }
			state = Object.assign({}, state, {
				feedback,
				guesses: state.guesses.concat(guess)
				});
			return state;
		}

	return state
};
