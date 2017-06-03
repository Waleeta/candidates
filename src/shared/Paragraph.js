import React, { Component } from 'react';
import { P } from 'glamorous';
import { tabletPortraitBreakpoint } from '../styles/breakpoints';

class Paragraph extends Component {
  render() {
    const rules = [{
      textAlign: 'justify',
      margin: '0 0 20px 0',
      lineHeight: '1.5',
      letterSpacing: '0.5px',
      fontSize: '16px',
    }, tabletPortraitBreakpoint({
      fontSize: '18px',
    })];
      
    return (
      <P css={rules} {...this.props}>{this.props.children}</P>
    );
  }
}

export default Paragraph;
