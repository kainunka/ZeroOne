import * as types from '../../constants/actionTypes';
import { menuHome } from '../../constants/data.service';

export const menuHomeSuccess = (data) => {
    return {
        type: types.DATA_MENU_HOME,
        dataMenuHome: data
    }
}


export const dataMenuHome = () => {
    return (dispatch) => {
        return dispatch(
            menuHomeSuccess(menuHome)
        );
    }
}


export const checkLanguageSuccess = (data) => {
    return {
        type: types.CHECK_LANGUAGE,
        checkLanguage: data
    }
    
}

export const checkLanguage = (checkLanguage) => {
    return (dispatch) => {
        return dispatch(
            checkLanguageSuccess(checkLanguage)
        );
    }
}

export const checkAuthSuccess = (data) => {
    return {
        type: types.CHECK_AUTH,
        checkAuth: data
    }
}

export const checkAuth = (boolean) => {
    return (dispatch) => {
        return dispatch(
            checkAuthSuccess(boolean)
        );
    }
}

export const userProfileSuccess = (data) => {
    return {
        type: types.USER_PROFILE,
        userProfile: data
    }
}

export const dataUserSuccess = (data) => {
    return {
        type: types.DATA_USER,
        dataUser: data
    }
}

export const dataUser = (data) => {
    return (dispatch) => {
        return dispatch(
            dataUserSuccess(data)
        )
    }
}

export const fbTokenSuccess = (token) => {
    return {
        type: types.FB_TOKEN,
        fbToken: token
    }
} 

export const fbToken = (token) => {
    return (dispatch) => {
        return dispatch(
            fbTokenSuccess(token)
        )
    }
}

export const userProfile = (userProfile) => {
    return (dispatch) => {
        return dispatch(
            userProfileSuccess(userProfile)
        );
    }
}

export const loadingSuccess = (data) => {
    return {
        type: types.LOADING_STATE,
        loading: data
    }
}

export const loading = (boolean) => {
    return (dispatch) => {
        return dispatch(
            loadingSuccess(boolean)
        );
    }
}
