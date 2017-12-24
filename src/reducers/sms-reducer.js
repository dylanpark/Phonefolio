import * as actions from 'constants/action';

const initialState = [];

function smsReducer(state=initialState, action) {
  switch (action.type) {
    case actions.updateSMS: {
      return [
        ...state,
        action.message
      ];
    }
    default: {
      return state;
    }
  }
}

export default smsReducer;
