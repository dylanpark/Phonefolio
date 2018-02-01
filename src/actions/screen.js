import * as actions from 'constants/action';

export function changeScreen(data) {
  return {
    type: actions.changeScreen,
    app: data.app,
    prev: data.prev
  };
}

export function toggleModal(data) {
  return {
    type: actions.toggleModal,
    active: data.active,
    data: data.data
  };
}

export function scaleApp(scale) {
  return {
    type: actions.scaleApp,
    scale: scale || 1
  };
}
