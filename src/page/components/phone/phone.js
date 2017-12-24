import React from 'react';

import Screen from 'components/screen/screen';
export default class Phone extends React.Component {
  render() {
    return (
      <div class='phone'>
        <div class='phone-notch'></div>
        <Screen app={this.props.screen.app}
                changeScreen={this.props.changeScreen}/>
      </div>
    )
  }
}

