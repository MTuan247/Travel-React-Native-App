function DataReducer(state, action) {
    if (typeof state === 'undefined') {
        return 0;
    }

    switch (action.type) {
        case 'SETDATA':
            return action.payload;

        default:
            return state;
    }
}

export default DataReducer;