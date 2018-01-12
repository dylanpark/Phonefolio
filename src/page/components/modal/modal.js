import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as screenActions fro 'actions/screen';

export default class ModalTemplate extends React.Component {
  render() {
    return (
      <div class='modal'>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const Modal = connect(mapStateToProps, mapDispatchToProps)(ModalTemplate);

export default Modal;
