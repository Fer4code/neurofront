import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        user: user
    };
};

export const retrieveSuccess = (user) => {
    return {
        type: actionTypes.RETRIEVE_SUCCESS,
        user: user
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
        };
        axios.post('login', authData)
            .then(response => {
                localStorage.setItem('accessToken', response.data.access_token);
                localStorage.setItem('refreshToken', response.data.refresh_token);
                localStorage.setItem('userId', response.data.user.id);
                dispatch(authSuccess(response.data.access_token, response.data.user));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.errors));
            });
    };
};

export const retrieveUserInfo = (token, userId) => {
    return dispatch => {
        dispatch(authStart());
        
        axios.get('users/' + userId)
            .then(response => {
                dispatch(authSuccess(token, response.data.data));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.errors));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};