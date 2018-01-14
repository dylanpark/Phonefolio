import React from 'react';
import ReactDOM from 'react-dom';

import Transition from 'components/transition/transition';
import ScreenHeader from 'components/screen/screen-header';
import AppHeader from 'components/app-header/app-header';
import apps from 'constants/apps';
import smsRespond from 'util/sms';

export default class SMS extends React.Component {
  constructor() {
    super();
    this.handleMessage = this.handleMessage.bind(this);
    this.changeState = this.changeState.bind(this);
    this.state = { show: false };
    setTimeout(() => {
      this.setState({ show: true });
    }, 200);
  }

  changeState(state) {
    this.setState(state);
  }

  componentDidMount() {
    this.setState({ canMessage: true });
    document.addEventListener('keydown', function(e) {
      const key = e.which || e.keyCode;
      if (key === 13) {
        this.handleMessage();
      }
    }.bind(this));
    setTimeout(() => {
      let smsBody = ReactDOM.findDOMNode(this).querySelector('.view-sms-body');
      smsBody.scrollTop = smsBody.scrollHeight;
    }, 200);
  }

  handleMessage() {
    if (!this.state.canMessage) {
      return;
    }
    this.setState({ canMessage: false });
    let smsElement = ReactDOM.findDOMNode(this);
    let smsBody = smsElement.querySelector('.view-sms-body');
    let inputEl = smsElement.querySelector('input');
    if (inputEl.value.trim() === '') {
      this.setState({ canMessage: true });
      return;
    }
    this.props.updateSMS({message: {
      user: inputEl.value 
    }});
    smsBody.scrollTop = smsBody.scrollHeight;
    const response = smsRespond(inputEl.value.toLowerCase());
    inputEl.value = '';
    setTimeout(function() {
      this.props.updateSMS({message: response});
      smsBody.scrollTop = smsBody.scrollHeight;
      this.setState({ canMessage: true });
    }.bind(this), 1000);
  }

  getMessages(smsList) {
    return smsList.map(function(sms, i) {
      const key = Object.keys(sms)[0];
      const className = 'message-' + key;
      return <span key={i} class={className}> {sms[key]} </span>
    })
  }
  
  render() {
    const messages = this.getMessages(this.props.sms);

    return (
      <Transition in={this.state.show}>
        <div class='screen screen-sms transition'>
          <ScreenHeader/>
          <div class='view-sms'>
            <AppHeader 
              changeState={this.changeState}
              app={apps.sms.name}/>
            <div class='view-sms-body'>
              {messages}
            </div>
            <div class='view-sms-input'>
              <div class='view-sms-input-container'>
                <input type='text' placeholder='Message'></input>
                <div class='view-sms-input-submit'
                     onClick={this.handleMessage}>
                  <i class='ion-arrow-up-c' 
                     aria-hidden='true'></i> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    );
  }
}


