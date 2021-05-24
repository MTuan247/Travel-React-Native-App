function SearchReducer(state = '', action) {
    if (typeof state === 'undefined') {
        return 0;
    }

    switch (action.type) {
        case 'SETSEARCH':
            return action.payload;

        default:
            return state;
    }
}

export default SearchReducer;