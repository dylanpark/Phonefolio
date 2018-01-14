import React from 'react';

import ScreenHeader from 'components/screen/screen-header';
import AppHeader from 'components/app-header/app-header';
import Profile from 'components/traderev/profile';
import Details from 'components/traderev/details';
import PhotoBody from 'components/traderev/photo-body';
import Transition from 'components/transition/transition';
import apps from 'constants/apps';

export default class TradeRev extends React.Component {
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
      <Transition in={this.state.show}>
        <div class='screen screen-traderev transition'>
           <ScreenHeader/>
          <div class='view-traderev'>
            <AppHeader app={apps.traderev.name} 
                       title='TRADEREV'
                       divider={true}
                       changeState={this.changeState}/>
            <div class='view-traderev-body'>
              <PhotoBody toggleModal={this.props.toggleModal}/>
              <Profile changeScreen={this.props.changeScreen}/>  
              <Details/>
            </div>
          </div>
        </div>
      </Transition>
    );
  }
}

