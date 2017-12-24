import * as actions from 'constants/action';

export function changeScreen(data) {
  return {
    type: actions.changeScreen,
    app: data.app
  };
}
