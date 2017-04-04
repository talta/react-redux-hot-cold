export const GUESS_RESPONSE = 'GUESS_RESPONSE';
export const guessResponse = (guess) =>({
	type: GUESS_RESPONSE,
	// feedback,
	guess
});

export const ON_INFO = 'ON_INFO';
export const onInfo = () =>({
	type:ON_INFO
});