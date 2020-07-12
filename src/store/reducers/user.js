import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    errors: {},
    registrationCompleted: false
}

const registerStart = ( state, action ) => {
    return updateObject( state, { errors: null, loading: true } );
};

const registerSuccess = (state, action) => {
    return updateObject( state, { 
        errors: null,
        loading: false,
        registrationCompleted: true
     } );
};

const registerFail = (state, action) => {
    return updateObject( state, {
        errors: action.errors,
        loading: false
    });
};

const registrationEnded = (state, action) => {
    return updateObject( state, {
        registrationCompleted: false
    })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.REGISTER_START: return registerStart(state, action);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        case actionTypes.REGISTRATION_ENDED: return registrationEnded(state, action);
        default:
            return state;
    }
};

export default reducer;