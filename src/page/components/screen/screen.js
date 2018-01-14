import React from 'react';

import apps from 'constants/apps';

import Home from 'components/home/home';
import Trifacta from 'components/trifacta/trifacta';
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
      case apps.trifacta.name: {
        return <Trifacta changeScreen={changeScreen}/>; 
      }
      default: {
        return null;
      }
    }
  }

  render() {
    const { app, modal, changeScreen } = this.props;
    const screenView = this.getScreen(app);
    const modalElement = modal.active ? 
      <Modal data={modal.data}/> : null;
    return (
      <Home changeScreen={changeScreen}>
        {screenView}
        {modalElement}
      </Home>
    );
  }
}
