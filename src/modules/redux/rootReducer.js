import { combineReducers } from 'redux';
import start from './reducers/start.reducer';
import activity from './reducers/activity.reducer';

const rootReducer = combineReducers({
    start,
    activity
});

export default rootReducer;