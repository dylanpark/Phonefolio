import * as actions from 'constants/action';

const initialState = [];
const loadingMsg = { loading: '' }; 

function smsReducer(state=initialState, action) {
  switch (action.type) {
    case actions.updateSMS: {
      if (Object.keys(action.message)[0] === 'user') {
         return [
          ...state,
          action.message,
          loadingMsg  
        ]; 
      } else {
        state = state.slice(0, state.length-1)
        state.push(action.message);
        return state;
      }
    }
    default: {
      return state;
    }
  }
}

export default smsReducer;
