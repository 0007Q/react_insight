import counterReducer from '../Reducers/counter'
import dropDownReducer from '../Reducers/dropDown'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    dropDown: dropDownReducer
});

export default allReducers;