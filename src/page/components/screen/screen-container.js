import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SCTemplate extends React.Component {
  render() {
    const { children, screen } = this.props;
    const style = {
      transform: 'scale(' + screen.scale  + ')',
    };

    return (
      <div class='screen-container' style={style}>
        {children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    screen: state.screen
  }
}

export default connect(mapStateToProps, () => ({}))(SCTemplate);
