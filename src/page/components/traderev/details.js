import React, { Fragment } from 'react';

export default class Details extends React.Component {
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
      ['End Date', 'December 22, 2017'],
      ['Location', 'North York, Canada'],
      ['Tech Stack', 'AngularJS, Node.js, Grails, MySQL'],
      ['Mentor', 'Jérémy Fache']
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
