import React, {Component} from 'react';
import styled from 'styled-components';

const TableHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2%;
  > div {
    flex-basis: 20%;
  }
  >div span {
    font-weight: bolder;
    text-decoration: underline;
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
          <span>Helmet</span>
        </div>
        <div>
          <span>Date</span>
        </div>
        <div>
          <span>Team</span>
        </div>
        <div>
          <span>Time</span>
        </div>
        <div>
          <span>Score</span>
        </div>
      </TableHeader>
    );
  }
}
