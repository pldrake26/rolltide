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
            <p>Logo is a trademark of the University of Alabama.<br/>
            Helmets are trademarks of the individual colleges and the NCAA.</p>
            <p>In memory of Troy Perigen, Joe and Lucy Morris, and their love of Alabama football.</p>
          </div>
        </PageFooter>
    );
  }
}
