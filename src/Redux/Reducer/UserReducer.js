import {firebase} from '../../Firebase/config'

const guestUser = {
    id: "Guest",
    fullName: 'Guest',
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
            firebase.auth().signOut()
            return guestUser;

        case 'ADDFAVORITE':
            var uinfo = {
                id: state.id,
                email: state.email,
                fullName: state.fullName,
                phone: state.phone,
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
                phone: state.phone,
                favorite: [...state.favorite],
            }
            var index = uinfo.favorite.indexOf(action.payload)
            if(index > -1) uinfo.favorite.splice(index, 1)
            firebase.firestore().collection('users').doc(uinfo.id).update({ favorite: uinfo.favorite })
            return uinfo;

        case 'UPDATE':
            var uinfo = {
                id: state.id,
                email: state.email,
                fullName: state.fullName,
                phone: state.phone,
                favorite: [...state.favorite],
            }
            uinfo.fullName = action.payload;
            firebase.firestore().collection('users').doc(uinfo.id).update({ ...uinfo })
            return uinfo;

        default:
            return state;
    }
}