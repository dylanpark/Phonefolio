import React from 'react';

import ScreenHeader from 'components/screen/screen-header';
import AppContainer from 'components/app-container/app-container';
import DockContainer from 'components/dock/dock-container';
import HomeSwipe from 'components/home/home-swipe';

export default class Home extends React.Component {
  render() {
    const { children, changeScreen, scaleApp, horizontal, isApp } = this.props;
    return (
      <div class='screen-home'>
        <ScreenHeader app={'home'}/>
        <AppContainer changeScreen={changeScreen}/>
        <DockContainer changeScreen={changeScreen}/>
        {isApp && <HomeSwipe changeScreen={changeScreen}
                             scaleApp={scaleApp}
                             horizontal={horizontal}/>}
        {children}
      </div>
    );
  }
}
