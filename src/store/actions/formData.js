import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const initFormDataStart = () => {
    return {
        type: actionTypes.INIT_FORM_DATA_START
    };
};

export const initFormDataSuccess = (formData, restrainState) => {
    console.log(restrainState)
    if (restrainState) {
        return {
            type: actionTypes.INIT_FORM_DATA_SUCCESS,
            countries: formData.countries,
            backgrounds: formData.backgrounds,
            vaccines: formData.vaccines,
            medicines: formData.medicines,
            symptoms: formData.symptoms,
            metadata: formData.metadata
        };
    } else {
        return {
            type: actionTypes.INIT_FORM_DATA_SUCCESS,
            countries: formData.countries,
            states: formData.states,
            municipalities: formData.municipalities,
            backgrounds: formData.backgrounds,
            vaccines: formData.vaccines,
            medicines: formData.medicines,
            symptoms: formData.symptoms,
            metadata: formData.metadata
        };
    }
};

export const initFormDataFail = (error) => {
    return {
        type: actionTypes.INIT_FORM_DATA_FAIL,
        error: error
    };
};

export const fetchStatesSuccess = (formData) => {
    return {
        type: actionTypes.FETCH_STATES_SUCCESS,
        states: formData,
    };
};

export const fetchMunicipalitiesSuccess = (formData) => {
    return {
        type: actionTypes.FETCH_MUNICIPALITIES_SUCCESS,
        municipalities: formData,
    };
};

export const initFormData = (restrainState=false) => {
    console.log(restrainState)
    return dispatch => {
        dispatch(initFormDataStart())
        axios.get('form_data')
            .then(response => {
                console.log(response.data.data)
                dispatch(initFormDataSuccess(response.data.data, restrainState))
            })
            .catch(err => {
                console.log(err)
                // dispatch(initFormDataFail(err.response.data.errors))
            })
    }
}

export const fetchStates = (country_id) => {
    return dispatch => {
        dispatch(initFormDataStart())
        axios.get('states/' + country_id)
            .then(response => {
                dispatch(fetchStatesSuccess(response.data.data))
            })
            .catch(err => {
                console.log(err)
                // dispatch(initFormDataFail(err.response.data.errors))
            })
    }
}

export const fetchMunicipalities = (state_id) => {
    return dispatch => {
        dispatch(initFormDataStart())
        axios.get('municipalities/' + state_id)
            .then(response => {
                dispatch(fetchMunicipalitiesSuccess(response.data.data))
            })
            .catch(err => {
                console.log(err)
                // dispatch(initFormDataFail(err.response.data.errors))
            })
    }
}