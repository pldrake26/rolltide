import React, {Component} from 'react';
import styled from 'styled-components';

const Section = styled.section`
    font-size: larger;
    display: flex;
    justify-content: space-between;
    padding: 1% 0;
    > div {
        flex-basis: 25%;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        border-top: 1px solid white;
        margin-top: 1%;
        padding: 2% 0;
    }
`

export default class Dates extends Component {
    render() {
        return (
            <div>
                <Section>
                    <div className="item">
                        {this.props.date}
                    </div>
                    <div className="item">
                        {this.props.team}
                    </div>
                    <div className="item">
                        {this.props.time}
                    </div>
                    <div className="item">
                        {this.props.final}
                    </div>
                </Section>
            </div>
        );
    }
}
