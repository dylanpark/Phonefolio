import React, {Fragment} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as screenActions from 'actions/screen';

import apps from 'constants/apps';

class AppHeaderTemplate extends React.Component {
  constructor() {
    super();
    this.quitApp= this.quitApp.bind(this);
  }

  quitApp() {
    const app = this.props.screen.prev || apps.home.name;
    this.props.changeScreen({
      app: app
    });
  }

  render() {
    const { app, title, divider } = this.props;
    const divEl = divider ? <div class='view-title-divider'></div> : null;
    const headerItem = app === apps.sms.name ? 
      <Fragment>
        <div class='view-sms-contact'>
          <span class='view-sms-contact-logo'> D </span>
          <span class='view-sms-contact-name'> Dylan </span>
        </div>
        <div></div>
      </Fragment> : 
      <div class='view-title-container'>
        {divEl}
        <div class={'view-' + app + '-title'}> {title} </div>
      </div>;
    return (
      <div class={'view-' + app + '-header'}>
        <i class='ion-ios-arrow-back'
           aria-hidden='true'
           onClick={this.quitApp}></i>
        {headerItem}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    screen: state.screen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...screenActions}, dispatch);
}

const AppHeader = connect(mapStateToProps, mapDispatchToProps)(AppHeaderTemplate);

export default AppHeader;
