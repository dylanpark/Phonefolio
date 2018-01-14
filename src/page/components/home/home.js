import React from 'react';

import ScreenHeader from 'components/screen/screen-header';
import AppContainer from 'components/app-container/app-container';
import DockContainer from 'components/dock/dock-container';

export default class Home extends React.Component {
  render() {
    const { children, changeScreen } = this.props;
    return (
      <div class='screen-home'>
        <ScreenHeader app={'home'}/>
        <AppContainer changeScreen={changeScreen}/>
        <DockContainer changeScreen={changeScreen}/>
        {children}
      </div>
    );
  }
}
