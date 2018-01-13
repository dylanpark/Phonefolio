import React from 'react';

import apps from 'constants/apps';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.launchSMS = this.launchSMS.bind(this);
  }

  launchSMS() {
    this.props.changeScreen({
      app: apps.sms.name,
      prev: apps.traderev.name
    });
  }

  render() {
    return (
      <div class='view-traderev-profile'>
        <div class='profile-logo'></div>
        <div class='profile-name'>
          <span>Dylan</span>
          <div class='profile-star'>
            <i class='fa fa-star' aria-hidden='true'/> 
            <i class='fa fa-star' aria-hidden='true'/> 
            <i class='fa fa-star' aria-hidden='true'/> 
            <i class='fa fa-star' aria-hidden='true'/> 
            <i class='fa fa-star' aria-hidden='true'/> 
          </div>
        </div>
        <i class='fa fa-comments-o' aria-hidden='true'
           onClick={this.launchSMS}/>
      </div>
    );
  }
}
