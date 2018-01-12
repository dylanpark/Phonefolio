import React from 'react';
import ReactDOM from 'react-dom';

import apps from 'constants/apps';
import AppHeader from 'components/app-header/app-header';
import smsRespond from 'util/sms';

export default class SMS extends React.Component {
  constructor() {
    super();
    this.handleMessage = this.handleMessage.bind(this);
  }

  componentDidMount() {
    this.setState({ canMessage: true });
    document.addEventListener('keydown', function(e) {
      const key = e.which || e.keyCode;
      if (key === 13) {
        this.handleMessage();
      }
    }.bind(this));
    let smsBody = ReactDOM.findDOMNode(this).querySelector('.view-sms-body');
    smsBody.scrollTop = smsBody.scrollHeight;
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
      <div class='view-sms'>
        <AppHeader app={apps.sms.name}/>
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
    );
  }
}


