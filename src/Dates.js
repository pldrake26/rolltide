import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.section `
  font-size: larger;
  margin-top: 1%;
`

const TeamRow = styled.div `
  border-top: 1px solid #A60B35;
  padding: 1% 0;
  display: flex;
  justify-content: space-between;
  > div {
    flex-basis: 25%;
    align-self: center;
  }
  >div img {
    width: 50%;
    height: auto;
    align-self: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    > div {
      flex-basis: 0;
      align-self: flex-start;
    }
    >div img {
      width: 8em;
      height: auto;
    }
  }
`

export default class Dates extends Component {
  render() {
    return (
      <Container>
        <TeamRow>
          <div><img src={this.props.helmet} alt=""/></div>
          <div>{this.props.date}</div>
          <div>{this.props.team}</div>
          <div>{this.props.time}</div>
          <div>{this.props.final}</div>
        </TeamRow>
      </Container>
    );
  }
}
