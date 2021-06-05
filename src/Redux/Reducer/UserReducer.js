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
                password: state.password,
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
                password: state.password,
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
                fullName: action.payload.fullName,
                password: state.password,
                phone: action.payload.phone,
                favorite: [...state.favorite],
            }
            firebase.firestore().collection('users').doc(uinfo.id).update({ ...uinfo })
            return uinfo;
        
        case 'CHANGEPASSWORD':
            var uinfo = {
                id: state.id,
                email: state.email,
                fullName: state.fullName,
                password: action.payload,
                phone: state.phone,
                favorite: [...state.favorite],
            }
            firebase.auth().currentUser.updatePassword(action.payload)
            firebase.firestore().collection('users').doc(uinfo.id).update({ password: action.payload })
            return uinfo;

        default:
            return state;
    }
}