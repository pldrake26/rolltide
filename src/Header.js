import React, {Component} from 'react';
import styled from 'styled-components';
import Logo from './images/roll-tide.png';

const Head = styled.header`
  background-color: #A60B35;
  color: white;
  .col-sm-12 h1 {
    text-align: center;
  }
`

export default class Header extends Component {
  render() {
    return (
      <Head className="row">
        <div className="col-sm-12">
          <img className="img-fluid mx-auto d-block" src={Logo} alt="Alabama Crimson Tide Logo" />
          <h1>Alabama Crimson Tide</h1>
        </div>
      </Head>
    );
  }
}
