import React from 'react';

import apps from 'constants/app';
import ScreenHeader from 'components/screen/screen-header';
import AppContainer from 'components/app-container/app-container';
import DockContainer from 'components/dock/dock-container';

import MainSMS from 'components/sms/main-sms';

export default class Screen extends React.Component {
  constructor() {
    super();
    this.getScreen = this.getScreen.bind(this);
  }

  getScreen(app) {
    const {...changeScreen} = this.props;
    switch(app) {
      case apps.sms.name: {
        return <MainSMS/>;
      }
      case apps.trifacta.name:
      case apps.traderev.name:
      default: {
        return (
          <div>
            <AppContainer {...changeScreen}/>
            <DockContainer {...changeScreen}/>
          </div>
        );
      }
    }
  }

  render() {
    const screenView = this.getScreen(this.props.app);
    return (
      <div class={'screen-' + this.props.app}>
        <ScreenHeader/>
        {screenView}
      </div>
    );
  }
}
