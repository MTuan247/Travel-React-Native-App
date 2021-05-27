import {firebase} from '../../Firebase/config'

const guestUser = {
    id: "Guest",
    // email: "Guest@nmt.com",
    // fullName: 'Guest',
    favorite: [],
}



export default function UserReducer(state = guestUser, action) {
    if (typeof state === 'undefined') {
        return 0;
    }
  
    switch (action.type) {
        case 'SETUSER':
            return action.payload;

        case 'LOGOUT':
            return guestUser;

        case 'ADDFAVORITE':
            var uinfo = {
                id: state.id,
                email: state.email,
                fullName: state.fullName,
                favorite: [...state.favorite],
            }
            uinfo.favorite.push(action.payload)
            firebase.firestore().collection('users').doc(uinfo.id).update({ favorite: uinfo.favorite })
            return uinfo;
        
        case 'REMOVEFAVORITE':
            var uinfo = {
                id: state.id,
                email: state.email,
                fullName: state.fullName,
                favorite: [...state.favorite],
            }
            var index = uinfo.favorite.indexOf(action.payload)
            if(index > -1) uinfo.favorite.splice(index, 1)
            firebase.firestore().collection('users').doc(uinfo.id).update({ favorite: uinfo.favorite })
            return uinfo;

        case 'RENAME':
            var uinfo = {
                id: state.id,
                email: state.email,
                fullName: state.fullName,
                favorite: [...state.favorite],
            }
            uinfo.fullName = action.payload;
            return uinfo;

        default:
            return state;
    }
}