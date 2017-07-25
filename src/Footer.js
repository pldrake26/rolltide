import React, {Component} from 'react';
import styled from 'styled-components';

const PageFooter = styled.div`
    background-color: #A60B35;
    color: white;
    font-weight: bold;
    padding: 1%;
`

export default class Footer extends Component {
    render() {
        return (
            <PageFooter>
                <p>&copy;2017 - Coded by Phillip L. Drake using React. - Logo is a trademark of the University of Alabama.</p>
                <p>In memory of Troy Perigen, Joe and Lucy Morris, and their love of Alabama football.</p>
            </PageFooter>
        );
    }
}
