import { combineReducers } from 'redux';
import testReducer from './testReducer';

const rootReducer = combineReducers({
	testData: testReducer,
})

export default rootReducer;