import React, { Fragment } from 'react';

import Transition from 'components/transition/transition';
import AppHeader from 'components/app-header/app-header';
import TrifactaBody from 'components/trifacta/trifacta-body';

import apps from 'constants/apps';

export default class Trifacta extends React.Component {
  constructor() {
    super();
    this.changeState = this.changeState.bind(this);
    this.state = { show: false };
    setTimeout(() => {
      this.setState({ show: true });
    }, 200);
  }

  changeState(state) {
    this.setState(state);
  }

  render() {
    return (
      <Transition in={this.state.show}
                  classNames={'transition-app'}>
        <div class='screen screen-trifacta transition-app'>
          <div class='view-trifacta'>
            <AppHeader app={apps.trifacta.name}
                       title='TRIFACTA'
                       link={apps.trifacta.url}
                       pos={'center'}
                       logo={apps.trifacta.logo}
                       changeState={this.changeState}/>
            <TrifactaBody/>
          </div>
        </div>
      </Transition>
    );
  }
}

