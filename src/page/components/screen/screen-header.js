import React from 'react';

export default class ScreenHeader extends React.Component {
  componentWillMount() {
    this.setState({ 
      time: this._formatTime()
    });
    this._getTime();
  }

  _getTime() {
    clearTimeout(this.renderTime);
    this.renderTime = setTimeout(function() {
      this.setState({
        time: this._formatTime()
      });
      this._getTime();
    }.bind(this), 10000);
  }

  _formatTime() {
    var date = new Date();
    var time = (date.getHours() % 12 === 0 ? 12 : date.getHours() % 12) + 
               ':' + 
               ('0' + date.getMinutes()).slice(-2);
    return time;
  }

  render() {
    return (
      <div class='screen-header'>
          <span class='time'> {this.state.time} </span>
          <span class='status'> 
            <i class="ion-connection-bars" aria-hidden="true"></i>
            <i class="ion-wifi" aria-hidden="true"></i>
            <i class="ion-battery-full" aria-hidden="true"></i>
          </span>
      </div>
    );
  }
}
