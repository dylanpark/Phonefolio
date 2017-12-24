import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as smsActions from 'actions/sms';
import * as screenActions from 'actions/screen';

import SMS from 'components/sms/sms';

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...smsActions,
    ...screenActions
  }, dispatch);
}

const MainSMS = connect(mapStateToProps, mapDispatchToProps)(SMS);

export default MainSMS;
