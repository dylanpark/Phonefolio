import React from 'react';

import apps from 'constants/app';
import getApp from 'util/getApp';

export default class DockContainer extends React.Component {
  render() {
    const appList = [apps.sms, apps.github, apps.trifacta, apps.traderev];
    const appViews = getApp(appList, this.props.changeScreen);
    return (
      <div class='dock-container'>
        <div class='dock-container-inner'>
          {appViews}
        </div>
      </div>
    );
  }
}
