import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as screenActions from 'actions/screen';

import Phone from 'components/phone/phone';

function mapStateToProps(state) {
  return {
    ...state  
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(screenActions, dispatch);
}

const MainPhone = connect(mapStateToProps, mapDispatchToProps)(Phone);

export default MainPhone;
