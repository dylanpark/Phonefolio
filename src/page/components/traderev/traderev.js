import React from 'react';

import AppHeader from 'components/app-header/app-header';
import Profile from 'components/traderev/profile';
import Details from 'components/traderev/details';
import PhotoBody from 'components/traderev/photo-body';
import apps from 'constants/apps';

export default class TradeRev extends React.Component {
  render() {
    return (
      <div class='view-traderev'>
        <AppHeader app={apps.traderev.name} 
                   title='TRADEREV'
                   divider={true}/>
        <div class='view-traderev-body'>
          <PhotoBody toggleModal={this.props.toggleModal}/>
          <Profile changeScreen={this.props.changeScreen}/>  
          <Details/>
        </div>
      </div>
    );
  }
}

