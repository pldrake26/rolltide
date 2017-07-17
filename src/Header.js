import React, {Component} from 'react';
import styled from 'styled-components';
import Logo from './../public/roll-tide.png';

const StyleHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export default class Header extends Component {
    render() {
        return (
            <StyleHeader>
                <div>
                    <img src={Logo} alt="Alabama Crimson Tide Logo" />
                </div>
                <div id="title">
                    <h1>Alabama Crimson Tide</h1>
                    <h2>2017 Football Schedule and Scores</h2>
                </div>
            </StyleHeader>
        );
    }
}
