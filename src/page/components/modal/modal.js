import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Transition from 'components/transition/transition';
import * as screenActions from 'actions/screen';

class ModalTemplate extends React.Component {
  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
    this.constructState = this.constructState.bind(this);
    this.navigateContent = this.navigateContent.bind(this);
    this.state = { show: false };
    setTimeout(() => {
      this.setState({show: true});
    }, 200);
  }
  
  componentDidMount() {
    this.constructState(this.props.data);
    document.addEventListener('keydown', function(e) {
      const key = e.which || e.keyCode;
      if (key === 27) {
        this.closeModal();
      } else if (key === 37) {
        this.navigateContent(-1, e);
      } else if (key === 39) {
        this.navigateContent(1, e);
      }
    }.bind(this));
  }

  navigateContent(offset, e) {
    e.stopPropagation();
    if (this.state.array) {
      const length = this.props.data.content.length;
      this.setState({
        index: (this.state.index + offset + length) % length
      });
    }
  }

  closeModal() {
    this.setState({ show: false });
    setTimeout(() => {
      this.props.toggleModal({
        active: false 
      });
    }, 200);
  }

  constructState(data) {
    if (data.type === 'array' && !this.state.array) {
      this.setState({
        index: data.index,
        array: true
      });
    }
  }

  render() {
    const { data } = this.props;
    let sourceContent;
    if (data.type === 'array') {
      sourceContent = data.content[this.state.index];
      var navArrows = 
        <div class='modal-nav-container'>
          <div class='modal-nav modal-nav-left'
               onClick={(e) => {this.navigateContent(-1, e)}}>
            <i class='ion-ios-arrow-left'/>
          </div>
          <div class='modal-nav modal-nav-right'
               onClick={(e) => {this.navigateContent(1, e)}}>
            <i class='ion-ios-arrow-right'/>
          </div>
        </div>;
    } else {
      sourceContent = data.content;
    }
    const stopBubble = (e) => { e.stopPropagation(); };
    const type = data.contentType || data.type;
    const content = type === 'image' ?
      <img src={sourceContent} 
           class='modal-content modal-image'
           onClick={stopBubble}
           onDragStart={(e)=>{e.preventDefault();}}/> :
      <span class='modal-content modal-text'
            onClick={stopBubble}>
        {sourceContent}
      </span>
    return (
      <Transition in={this.state.show}>
        <div class='modal transition' onClick={this.closeModal}>
          {content} 
          {navArrows}
        </div>
      </Transition>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(screenActions, dispatch);
}

const Modal = connect(() => ({}), mapDispatchToProps)(ModalTemplate);

export default Modal;
