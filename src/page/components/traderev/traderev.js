import React from 'react';

import AppHeader from 'components/app-header/app-header';
import PhotoBody from 'components/traderev/photo-body';
import apps from 'constants/apps';

export default class TradeRev extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class='view-traderev'>
        <AppHeader app={apps.traderev.name} 
                   title='TRADEREV'
                   divider={true}/>
        <div class='view-traderev-body'>
          <PhotoBody/>
        </div>
      </div>
    );
  }

}
