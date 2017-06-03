import React, { Component } from 'react';
import { H3, Div } from 'glamorous';
import { headingFamily } from '../styles/fonts';

const titleRules = {
  position: 'relative',
  textTransform: 'uppercase',
  fontFamily: headingFamily,
  background: 'black',
  color: 'white',
  padding: '20px',
  margin: '0 0 40px 0',
  textAlign: 'center',
}

const shadowRules = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: '-5px',
  bottom: '-5px',
  border: '1px solid black'
}

class PositionHeader extends Component {
  render() {
    return (
      <H3 css={titleRules}>
        {this.props.title} position
        <Div css={shadowRules}></Div>
      </H3>
    );
  }
}

export default PositionHeader;
