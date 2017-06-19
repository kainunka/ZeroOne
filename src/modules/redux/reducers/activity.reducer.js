import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

var time = new Date();
time.setTime(time.getTime() + 120*60*1000);
const setTime = new Date(time.getTime());

export default  (state = initialState.activity, action) => {
    switch (action.type) {

        case types.SHOW_MODAL:
            return {
                ...state,
                showModal: action.showModal
            }
        
        case types.BACKGROUND_ACTIVITY: 
            return {
                ...state,
                backgroundActivity: action.backgroundActivity
            }
           
        case types.ACTIVITY_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        
        case types.ACTIVITY_CREATE:
            return {
                ...state,
                subject: action.subject,
                content: action.content,
                dateTimePicker: action.dateTimePicker,
                donate: action.donate
            }, { 
                ...state,
                subject: '',
                content: '',
                checkDataActivity: true,
                dateTimePicker: setTime,
                donate: '0'
             }
        
        case types.ACTIVITY_SHOW:
            return {
                ...state,
                showActivity: action.showActivity
            }

        case types.FEED_DATA_ACTIVITY:
            return {
                ...state,
                dataActivity: action.dataActivity
            }
        
        case types.DELETE_ACTIVITY:
            return {
                ...state,
                showModal: true,
                checkDataActivity: false
            }
        case types.DIFF_TIME:
            return {
                ...state,
                s: action.s
            }
        case types.CHECK_DATA_ACTIVITY: 
            return {
                ...state,
                checkDataActivity: action.checkDataActivity
            }

        default:
            return state;
    }
}