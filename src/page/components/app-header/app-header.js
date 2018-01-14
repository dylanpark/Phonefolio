import React, {Fragment} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as screenActions from 'actions/screen';

import transition from 'constants/transition';
import apps from 'constants/apps';

class AppHeaderTemplate extends React.Component {
  constructor() {
    super();
    this.quitApp= this.quitApp.bind(this);
  }

  quitApp() {
    const app = this.props.screen.prev || apps.home.name;
    this.props.changeState({ show: false });
    setTimeout(() => {
      this.props.changeScreen({
        app: app
      });
    }, transition.APPS);
  }

  render() {
    const { app, title, divider, link, pos, logo} = this.props;
    const divEl = divider ? <div class='view-title-divider'></div> : null;
    const posClass = pos ? '-' + pos : '';
    const logoEl = logo ? <img class='view-title-logo' src={logo}/> : null;
    const headerTitle = link ? 
      <a target='_blank' href={link} class={'view-' + app + '-title'}> 
        {logoEl}
        {title}
      </a> : 
      <div class={'view-'+app+'-title'}>{title}</div>;
    const headerItem = app === apps.sms.name ? 
      <Fragment>
        <div class='view-sms-contact'>
          <span class='view-sms-contact-logo'> D </span>
          <span class='view-sms-contact-name'> Dylan </span>
        </div>
        <div></div>
      </Fragment> : 
      <div class={'view-title-container' + posClass}>
        {divEl}
        {headerTitle}
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
