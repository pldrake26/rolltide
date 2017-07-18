import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-size: larger;
`
const Section = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1% 0;
    > div {
        flex-basis: 25%;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        border-top: 1px solid white;
        padding: 2% 0;
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
                        <span>Time:&nbsp;{this.props.time}</span>
                    </div>
                    <div>
                        <span>Score:&nbsp;{this.props.final}</span>
                    </div>
                </Section>
            </Container>
        );
    }
}
