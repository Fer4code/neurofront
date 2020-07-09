import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const saveClinicalStorySuccess = () => {
    return {
        type: actionTypes.SAVE_CLINICAL_STORY_SUCCESS,
    };
};

export const saveClinicalStoryFail = ( error ) => {
    return {
        type: actionTypes.SAVE_CLINICAL_STORY_FAIL,
        error: error
    };
}

export const saveClinicalStoryStart = () => {
    return {
        type: actionTypes.SAVE_CLINICAL_STORY_START
    };
};

export const saveClinicalStory = ( clinicalStoryData, token ) => {
    return async (dispatch) => {
        try {
            const relevantData = []
            clinicalStoryData.metadata.forEach(csdata => {
                let val = false
                clinicalStoryData.relevantMetadata.forEach(csdata2 => {
                  val = val || csdata.id == csdata2.id 
                })
                relevantData.push(val)
            })
            console.log(relevantData)
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            dispatch( saveClinicalStoryStart() );
            console.log(clinicalStoryData.birth_date)
            
            const directionData = {
                municipality_id: clinicalStoryData.municipality,
                description: clinicalStoryData.direction
            }
            let response = await axios.post('directions', directionData, config )

            const iso_date = clinicalStoryData.birth_date.toISOString().slice(0, 10)
            const personal_background = clinicalStoryData.personal_backgrounds.map((bg => bg.id))
            const family_background = clinicalStoryData.family_backgrounds.map((bg => bg.id))
            const family_member = clinicalStoryData.family_backgrounds.map((bg => bg.member))
            const vaccine = clinicalStoryData.vaccines.map((bg => bg.id))
            const pacientData = {
                current_direction: response.data.data.id,
                first_name: clinicalStoryData.first_name,
                second_name: clinicalStoryData.second_name,
                last_name: clinicalStoryData.last_name,
                second_last_name: clinicalStoryData.second_last_name,
                document: clinicalStoryData.documentType + clinicalStoryData.document,
                gender: clinicalStoryData.gender,
                birth_date: iso_date,
                marital_status: clinicalStoryData.marital_status,
                blood_type: clinicalStoryData.blood_type,
                telephone_1: clinicalStoryData.telephone,
                telephone_2: clinicalStoryData.telephone2,
                related_data: {
                    personal_background,
                    family_background,
                    family_member,
                    vaccine: clinicalStoryData.vaccine,
                }
            }
            response = await axios.post('pacients', pacientData, config)

            
            const symptom_id = clinicalStoryData.symptoms.map((option) => option.id)
            const metadata_id = clinicalStoryData.metadata.map((option) => option.id)
            const clinicalStory = {
                pacient_id: response.data.data.id,
                edad_paciente: clinicalStoryData.edad_paciente,
                description: clinicalStoryData.description,
                fisical_exam: clinicalStoryData.fisical_exam,
                diastolic: clinicalStoryData.diastolic,
                sistolic: clinicalStoryData.sistolic,
                pulse: clinicalStoryData.pulse,
                frec_resp: clinicalStoryData.frec_resp,
                temp: clinicalStoryData.temp,
                height: clinicalStoryData.height,
                weight: clinicalStoryData.weight,
                observations: clinicalStoryData.observations,
                diagnosis: clinicalStoryData.diagnosis,
                related_data: {
                    symptom_id: symptom_id,
                    metadata_id: metadata_id,
                    relevant: relevantData
                }
            }
            response = await axios.post('clinical_stories', clinicalStory, config)
            
            
            
            
            dispatch( saveClinicalStorySuccess() );
        } catch (error) {
            console.log(error)
            dispatch( saveClinicalStoryFail( error.response.data.errors ) );
        }
        
    };
};

export const fetchClinicalStoriesSuccess = ( clinicalStories ) => {
    return {
        type: actionTypes.FETCH_CLINICAL_STORIES_SUCCESS,
        clinicalStories: clinicalStories
    };
};

export const fetchClinicalStoriesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_CLINICAL_STORIES_FAIL,
        error: error
    };
};

export const fetchClinicalStoriesStart = () => {
    return {
        type: actionTypes.FETCH_CLINICAL_STORIES_START
    };
};

export const fetchClinicalStories = (token, userId) => {
    return dispatch => {
        dispatch(fetchClinicalStoriesStart());
        axios.get( '/clinical_stories')
            .then( res => {
                const fetchedClinicalStories = [];
                for ( let key in res.data ) {
                    fetchedClinicalStories.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchClinicalStoriesSuccess(fetchedClinicalStories));
            } )
            .catch( err => {
                dispatch(fetchClinicalStoriesFail(err));
            } );
    };
};