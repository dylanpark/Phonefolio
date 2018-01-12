import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as screenActions from 'actions/screen';
import Screen from 'components/screen/screen';

class PhoneTemplate extends React.Component {
  render() {
    return (
      <div class='phone'>
        <div class='phone-notch'></div>
        <Screen app={this.props.screen.app}
                changeScreen={this.props.changeScreen}
                toggleModal={this.props.toggleModal}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state  
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(screenActions, dispatch);
}

const Phone = connect(mapStateToProps, mapDispatchToProps)(PhoneTemplate);

export default Phone;
