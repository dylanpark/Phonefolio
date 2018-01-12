import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CSSTransition} from 'react-transition-group';

import * as screenActions from 'actions/screen';

class ModalTemplate extends React.Component {
  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
    this.state = { show: false };
    setTimeout(() => {
      this.setState({show: true});
    }, 300);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', function(e) {
      const key = e.which || e.keyCode;
      if (key === 27) {
        this.closeModal();
      }
    }.bind(this));
  }

  closeModal() {
    this.setState({ show: false });
    setTimeout(() => {
      this.props.toggleModal({
        active: false 
      });
    }, 300);
  }

  render() {
    const { data } = this.props;
    const content = data.type === 'image' ?
      <img src={data.content} 
           class='modal-image'/> :
      <span class='modal-text'>{data.content}</span>
    return (
      <CSSTransition 
        in={this.state.show}
        timeout={300}
        classNames='modal'
        unmountOnExit>
        <div class='modal' onClick={this.closeModal}>
          {content} 
        </div>
      </CSSTransition>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(screenActions, dispatch);
}

const Modal = connect(() => ({}), mapDispatchToProps)(ModalTemplate);

export default Modal;
