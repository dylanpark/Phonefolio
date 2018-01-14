import React, { Fragment } from 'react';

import Transition from 'components/transition/transition';
import ScreenHeader from 'components/screen/screen-header';
import AppHeader from 'components/app-header/app-header';

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
          <ScreenHeader/>
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

class TrifactaBody extends React.Component {
  constructor() {
    super();
    this.getDataColumns = this.getDataColumns.bind(this);
  }

  getDataColumns(data) {
    let indices = [], details = [], descriptions = [];
    data.map((d, i) => {
      indices.push(
        <div key={'index-'+i}
             class='trifacta-index'>{i}</div>);
      details.push(
        <div key={'detail-'+i} 
             class='trifacta-data' data-id={'detail-'+i}>
          {d[0]}
        </div>);
      descriptions.push(
        <div key={'desc-'+i} 
             class='trifacta-data' data-id={'desc-'+i}>
          {d[1]}
        </div>);
    });
    return { indices, details, descriptions };
  }

  render() {
    const dataColumns = this.getDataColumns([
      ['title', 'Software Engineering Intern'],
      ['1st_term_start', '01/09/2017'],
      ['1st_term_end', '04/28/2017'],
      ['2nd_term_start', '04/30/2018'],
      ['2nd_term_end', '08/31/2018'],
      ['tech_stack', 'Backbone.js, jade/pug, Mocha.js'],
      ['location', 'San Francisco, United States'],
      ['supervisor', 'Eli Marschner'],
    ]);

    return (
      <div class='view-trifacta-body'>
        <div class='column-index'>
          {dataColumns.indices}
        </div>
        <div class='column-details'>
          {dataColumns.details}
        </div>
        <div class='column-description'>
          {dataColumns.descriptions}
        </div>
      </div>
    );
  }
}
