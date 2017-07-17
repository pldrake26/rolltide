import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-size: larger;
`
const Section = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2%;
    > div {
        flex-basis: 25%;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        border-top: 1px solid white;
    }
`

export default class Dates extends Component {
    render() {
        return (
            <Container>
                <Section>
                    <div>
                        <span>{this.props.date}</span>
                    </div>
                    <div>
                        <span>{this.props.team}</span>
                    </div>
                    <div>
                        <span>{this.props.time}</span>
                    </div>
                    <div>
                        <span>{this.props.final}</span>
                    </div>
                </Section>
            </Container>
        );
    }
}
