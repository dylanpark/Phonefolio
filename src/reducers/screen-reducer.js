import * as actions from 'constants/action';
import apps from 'constants/apps';

const initialState = {
  app: apps.home.name,
  modal: {
    active: false,
    data: {
      type: 'text',
      content: null
    }
  }
};

function screenReducer(state=initialState, action) {
  switch (action.type) {
    case actions.changeScreen: {
      return {
        ...state,
        app: action.app,
        prev: action.prev
      };
    }
    case actions.toggleModal: {
      return {
        ...state,
        modal: {
          active: action.active,
          data: action.data
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default screenReducer;
