import React, {Component} from 'react';
import styled from 'styled-components';
import Logo from './../public/roll-tide.png';

const StyleHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    > h1 {
        text-align: center;
    }
`

export default class Header extends Component {
    render() {
        return (
            <StyleHeader>
                    <img src={Logo} alt="Alabama Crimson Tide Logo" />
                    <h1>Alabama Crimson Tide</h1>
            </StyleHeader>
        );
    }
}
