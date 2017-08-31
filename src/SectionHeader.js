import React, {Component} from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default class SectionHeader extends Component {
  render() {
    return (
      <StyledRow className="row mt-sm-5">
        <div className="col-sm">
          <h4>Helmet</h4>
        </div>
        <div className="col-sm">
          <h4>Date</h4>
        </div>
        <div className="col-sm">
          <h4>Team</h4>
        </div>
        <div className="col-sm">
          <h4>Time</h4>
        </div>
        <div className="col-sm">
          <h4>Score</h4>
        </div>
      </StyledRow>
    );
  }
}
