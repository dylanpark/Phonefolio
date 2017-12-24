import * as actions from 'constants/action';
import apps from 'constants/app';

const initialState = {
  app: apps.home.name
};

function screenReducer(state=initialState, action) {
  switch (action.type) {
    case actions.changeScreen: {
      return {
        ...state,
        app: action.app
      };
    }
    default: {
      return state;
    }
  }
}

export default screenReducer;
