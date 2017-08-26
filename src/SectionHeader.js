import React, {Component} from 'react';
import styled from 'styled-components';

const TableHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2%;
  > div {
    flex-basis: 20%;
  }
  >div h3 {
    font-weight: bolder;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default class SectionHeader extends Component {
  render() {
    return (
      <TableHeader>
        <div>
          <h3>Helmet</h3>
        </div>
        <div>
          <h3>Date</h3>
        </div>
        <div>
          <h3>Team</h3>
        </div>
        <div>
          <h3>Time</h3>
        </div>
        <div>
          <h3>Score</h3>
        </div>
      </TableHeader>
    );
  }
}
