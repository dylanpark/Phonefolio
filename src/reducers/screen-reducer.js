import * as actions from 'constants/action';
import apps from 'constants/apps';

const initialState = {
  app: apps.home.name,
  scale: 1,
  modal: {
    active: false,
    data: {
      type: 'text',
      contentType: null,
      content: null,
      index: null
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
      };
    }
    case actions.scaleApp: {
      return {
        ...state,
        scale: action.scale
      };
    }
    default: {
      return state;
    }
  }
}

export default screenReducer;
