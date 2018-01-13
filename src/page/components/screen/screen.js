import React from 'react';

import apps from 'constants/apps';
import ScreenHeader from 'components/screen/screen-header';
import AppContainer from 'components/app-container/app-container';
import DockContainer from 'components/dock/dock-container';

import MainSMS from 'components/sms/main-sms';
import TradeRev from 'components/traderev/traderev';
import Modal from 'components/modal/modal';

export default class Screen extends React.Component {
  constructor() {
    super();
    this.getScreen = this.getScreen.bind(this);
  }

  getScreen(app) {
    const {toggleModal, changeScreen} = this.props;
    switch(app) {
      case apps.sms.name: {
        return <MainSMS/>;
      }
      case apps.traderev.name: {
        return <TradeRev changeScreen={changeScreen} 
                         toggleModal={toggleModal}/>;
      }
      case apps.trifacta.name:
      default: {
        return (
          <div>
            <AppContainer changeScreen={changeScreen}/>
            <DockContainer changeScreen={changeScreen}/>
          </div>
        );
      }
    }
  }

  render() {
    const { app, modal } = this.props;
    const screenView = this.getScreen(app);
    const modalElement = modal.active ? 
      <Modal data={modal.data}/> : null;
    return (
      <div class={'screen ' + 'screen-' + app}>
        <ScreenHeader/>
        {screenView}
        {modalElement}
      </div>
    );
  }
}
