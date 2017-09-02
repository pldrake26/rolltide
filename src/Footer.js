import React, {Component} from 'react';
import styled from 'styled-components';

const PageFooter = styled.div`
  background-color: #A60B35;
  color: white;
  padding: 1%;
`

export default class Footer extends Component {
  render() {
    return (
        <PageFooter className="row">
          <div className="col-sm-12">
            <p>&copy;2017 - Coded by Phillip L. Drake using React.</p>
            <p>All logos and helmets are trademarks™ or registered® trademarks of their respective holders.<br/>Use of them does not imply any affiliation with or endorsement by them.</p>
            <p>In memory of Troy Perigen, Joe and Lucy Morris, and their love of Alabama football.</p>
          </div>
        </PageFooter>
    );
  }
}
