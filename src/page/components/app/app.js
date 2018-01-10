import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.launchApp = this.launchApp.bind(this);
  }

  launchApp(app) {
    if (app) {
      this.props.changeScreen({
        app  
      });
    }
  }

  render() {
    const {app, link, title} = this.props;
    const className = 'app ' + app;
    
    const element = !link ? 
      <div class={className} 
           onClick={() => {this.launchApp(app)}}>
      </div> : 
      <a class={className} href={link} target='_blank'></a>;

    return title ? 
      <div class='titled-app flex-stack'> 
        {element}
        <span class='app-title'> {title} </span>
      </div> :
      element;
  }
}
