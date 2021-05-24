

function ListType(state, action) {
if (typeof state === 'undefined') {
    return 0;
}
  
switch (action.type) {
    case 'SETTYPE':
        return action.payload;

    default:
        return state;
    }
}

 export default ListType;
//  export {counter, setType};