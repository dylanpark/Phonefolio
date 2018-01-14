import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';

const Transition = ({ children, ...props}) => (
  <CSSTransition 
    {...props}
    timeout={200}
    classNames='transition'
    unmountOnExit>
    {children}
  </CSSTransition>
);

export default Transition;
