import React, { Fragment } from 'react';

import AppHeader from 'components/app-header/app-header';
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
          <TradeRevDetails/>
        </div>
      </div>
    );
  }
}

class TradeRevDetails extends React.Component {
  constructDetails(data) {
    return data.map((obj, i) => (
      <Fragment key={i}>
        <div class='detail-row'>
          <span>{obj[0]}</span>
          <span>{obj[1]}</span>
        </div>
        <hr/>
      </Fragment>
    ));
  }

  render() {
    const detailList = this.constructDetails([
      ['Title', 'Full Stack Developer - Co-op'],
      ['Start Date', 'September 5, 2017'],
      ['End Date', 'December 22\', 2017'],
      ['Location', 'North York, Canada'],
      ['Tech Stack', 'AngularJS, Node.js, Grails, MySQL']
    ]);

    return (
      <div class='view-traderev-details'>
        <div class='detail-row'>
          <div class='bold'> Work Details </div>
        </div>
        <hr class='bold'/>
        {detailList}
      </div>
    );
  }
}
