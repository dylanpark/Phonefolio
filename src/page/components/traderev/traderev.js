import React from 'react';

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
  render() {
    return (
      <div class='view-traderev-details'>
        <div class='detail-row'>
          <div class='bold'> Work Details </div>
        </div>
        <hr class='bold'/>
        <div class='detail-row'>
          <span> Title </span>
          <span> Full Stack Developer — Co-op </span>
        </div>
        <hr/>
        <div class='detail-row'>
          <span> Start Date </span>
          <span> September 5, 2017 </span>
        </div>
        <hr/>
        <div class='detail-row'>
          <span> End Date </span>
          <span> December 22, 2017 </span>
        </div>
        <hr/>
        <div class='detail-row'>
          <span> Location </span>
          <span> North York, Canada </span>
        </div>
        <hr/><div class='detail-row'>
          <span> Tech Stack </span>
          <span> AngularJS, Node.js, Grails, MySQL </span>
        </div>
        <hr/>
      </div>
    );
  }
}
