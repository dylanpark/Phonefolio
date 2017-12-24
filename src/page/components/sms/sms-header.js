import React from 'react';

import apps from 'constants/app';

export default class SMSHeader extends React.Component {
  constructor() {
    super();
    this.launchHome = this.launchHome.bind(this);
  }

  launchHome() {
    this.props.changeScreen({
      app: apps.home.name
    });
  }

  render() {
    return (
      <div class='view-sms-header'>
        <i class='ion-ios-arrow-back' 
           aria-hidden='true'
           onClick={this.launchHome}></i>
        <div class='view-sms-contact'>
          <span class='view-sms-contact-logo'> D </span>
          <span class='view-sms-contact-name'> Dylan </span>
        </div>
        <div></div>
      </div>
    );
  }
}
