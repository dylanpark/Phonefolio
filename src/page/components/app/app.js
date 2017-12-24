import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.launchApp = this.launchApp.bind(this);
  }

  launchApp(app, link) {
    if (link) {
      window.open(link, '_blank', false);
    } else if (app) {
      this.props.changeScreen({
        app  
      });
    }
  }

  render() {
    const {app, link} = this.props;
    const className = 'app ' + app;
    return (
      <div class={className} 
           onClick={() => {this.launchApp(app, link)}}></div>
    );
  }
}
