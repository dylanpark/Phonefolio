import React from 'react';
import ReactDOM from 'react-dom';

export default class TrifactaBody extends React.Component {
  constructor() {
    super();
    this.getDataColumns = this.getDataColumns.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect(type, i) {
    let dataBox = ReactDOM.findDOMNode(this)
      .querySelector('.' + type + 'column');
    dataBox.querySelector('[data-id="chart-'+type+i+'"]')
      .classList.toggle('chart-data-select');
    dataBox.querySelector('[data-id="'+type+i+'"]')
      .classList.toggle('trifacta-data-select');
  }

  getDataColumns(data) {
    const categoryCount = <div key={0} class='trifacta-data'>
      {data.length + ' Categories'} </div>;
    let indices = [], 
        details = [categoryCount], 
        descriptions = [categoryCount],
        detailsChart = [], descriptionsChart = [];
    
    const eventFunction = (type, i) => ({
      onMouseEnter: (e) => {
        e.preventDefault();
        this.toggleSelect(type, i);
      },
      onMouseLeave: (e) => {
        e.preventDefault();
        this.toggleSelect(type, i);
      }
    });

    data.map((d, i) => {
      indices.push(
        <div key={'index-'+i}
             class='trifacta-index'>{i+1}</div>);
      details.push(
        <div key={'detail-'+i} 
             class='trifacta-data' data-id={'detail-'+i}
             {...eventFunction('detail-', i)}>
          {d[0]}
        </div>);
      descriptions.push(
        <div key={'desc-'+i} 
             class='trifacta-data' data-id={'desc-'+i}
             {...eventFunction('desc-', i)}>
          {d[1]}
        </div>);

      detailsChart.push(
        <div key={'detail-chart-'+i}
             class='chart-data chart-data-detail' 
             data-id={'chart-detail-'+i}
             {...eventFunction('detail-', i)}>
        </div>);

      descriptionsChart.push(
        <div key={'desc-chart-'+i}
             class='chart-data chart-data-desc' 
             data-id={'chart-desc-'+i}
             {...eventFunction('desc-', i)}>
        </div>);
    });
    return { 
      indices, details, descriptions,
      detailsChart, descriptionsChart
    };
  }

  render() {
    const dataColumns = this.getDataColumns([
      ['title', 'Software Engineering Intern'],
      ['first_term_start_date', '01/09/2017'],
      ['first_term_end_date', '04/28/2017'],
      ['second_term_start_date', '04/30/2018'],
      ['second_term_end_date', '08/31/2018'],
      ['tech_stack', 'Backbone.js, jade/pug, Mocha.js'],
      ['location', 'San Francisco, United States'],
      ['supervisor', 'Eli Marschner'],
    ]);

    return (
      <div class='view-trifacta-body'>
        <div class='index-column'>
          {dataColumns.indices}
        </div>
        <div class='detail-column'>
          <div class='chart-title'> 
            <span class='chart-data-type-detail'>ABC</span>
            Details 
           </div>
          <div class='chart-header'></div>
          <div class='chart'>
            {dataColumns.detailsChart}
          </div>
          {dataColumns.details}
        </div>
        <div class='desc-column'>
          <div class='chart-title'> 
            <span class='chart-data-type-desc'>ABC</span>
            Description 
          </div>
          <div class='chart-header'></div>
          <div class='chart'> 
            {dataColumns.descriptionsChart}   
          </div>
          {dataColumns.descriptions}
        </div>
      </div>
    );
  }
}
