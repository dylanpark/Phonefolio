import {combineReducers} from 'redux';

import smsReducer from 'reducers/sms-reducer';
import screenReducer from 'reducers/screen-reducer';

const rootReducer = combineReducers({
  sms: smsReducer, 
  screen: screenReducer
});

export default rootReducer;
