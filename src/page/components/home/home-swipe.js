import React from 'react';

import apps from 'constants/apps';

export default class HomeSwipe extends React.Component {
  constructor() {
    super();
    this.state = {
      draggable: false,
      hover: false
    }
    this.startDrag = this.startDrag.bind(this);
    this.checkDrag = this.checkDrag.bind(this);
    this.scaleApp = this.scaleApp.bind(this);
    this.changeHoverState = this.changeHoverState.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.checkDrag);
    document.addEventListener('mousemove', 
      (e) => this.scaleApp(null, e));
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.checkDrag);
    document.removeEventListener('mousemove', 
      (e) => this.scaleApp(null, e));
  }

  scaleApp(scale, e) {
    if (this.state.draggable) {
      if (scale) {
        this.props.scaleApp(scale);
      } else {
        const diff = this.state.pos - 
          (this.props.horizontal ? e.pageX : e.pageY);
        let ratio = 1 - diff / 600;
        ratio = ratio > 1 ? 1 : ratio < 0.3 ? 0.3 : ratio;
        ratio = ratio < 0.3 ? 0.3 : ratio;
        this.props.scaleApp(ratio);
      }
    }
  }

  startDrag(state, e) {
    e.preventDefault();
    this.setState({
      draggable: true,
      pos: this.props.horizontal ? e.pageX : e.pageY
    });
  }

  checkDrag(e) {
    e.preventDefault();
    if (this.state.draggable) {
      let diff = this.state.pos - 
        (this.props.horizontal ? e.pageX : e.pageY);
      if (diff > 100) {
        this.scaleApp(1);
        this.props.changeScreen({
          app: apps.home.name
        });
      } else {
        this.scaleApp(1);
      }
      this.setState({ draggable: false });
    }
  }

  changeHoverState(val, e) {
    e.preventDefault();
    this.setState({
      hover: val
    });
  }

  render() {
    const swipeBarClass = this.state.hover ? '' : 'hidden';
    return (
      <div class='flex home-swipe' 
           onMouseOver={(e) => this.changeHoverState(true, e)}
           onMouseLeave={(e) => this.changeHoverState(null, e)}
           onMouseDown={(e) => this.startDrag('draggable', e)}>
        <div class={'home-swipe-bar ' + swipeBarClass}>
        </div>
      </div>
    );
  }
}
