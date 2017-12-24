import React from 'react';

import apps from 'constants/app';
import getApp from 'util/getApp';

export default class AppContainer extends React.Component {
  render() {
    const appList = [apps.instagram];
    const appViews = getApp(appList, this.props.changeScreen);

    return (
      <div class='app-container'>
          {appViews} 
      </div>
    );
  }
}
