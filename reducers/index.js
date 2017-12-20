import { ADD_ENTRY, RECEIVE_ENTIRES } from '../actions';

function entries(state={}, action) {
    // console.log('action:', action)
    switch (action.type) {
        case RECEIVE_ENTIRES :
            // console.log('entries in reducer', entries)
            return {
                ...state,
                ...action.entries
            }
        case ADD_ENTRY :
            return {
                ...state,
                ...action.entry
            }
        default :
            return state
    }
}

export default entries;
