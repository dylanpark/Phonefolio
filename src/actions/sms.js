import * as actions from 'constants/action';

export function updateSMS(data) {
  return {
    type: actions.updateSMS,
    message: data.message
  };
}
