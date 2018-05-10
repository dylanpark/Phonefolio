import React from 'react';

import apps from 'constants/apps';

import Home from 'components/home/home';
import Trifacta from 'components/trifacta/trifacta';
import MainSMS from 'components/sms/main-sms';
import TradeRev from 'components/traderev/traderev';
import Modal from 'components/modal/modal';
import ScreenContainer from 'components/screen/screen-container';

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
      case apps.trifacta.name: {
        return <Trifacta changeScreen={changeScreen}/>; 
      }
      default: {
        return null;
      }
    }
  }

  render() {
    const { app, modal, changeScreen, scaleApp } = this.props;
    const props = {
      horizontal: app === apps.trifacta.name,
      isApp: app !== apps.home.name,
      scaleApp,
      changeScreen
    };
    const screenView = this.getScreen(app);
    const modalElement = modal.active ? 
      <Modal data={modal.data}/> : null;
    return (
      <Home {...props}>
        <ScreenContainer>
          {screenView}
        </ScreenContainer>
        {modalElement}
      </Home>
    );
  }
}
