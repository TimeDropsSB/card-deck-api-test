const INITIAL_STATE = {
    hand: {
        cards: [],
        numCards: 0
    }
};

/**
 * Poker player reducer.
 */
function pokerPlayer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "INIT_PLAYER":
            return {
                ...state,
                deck: action.payload
            };

        default:
            return state;
    }
}

export default {
    pokerPlayer
}
