import React, {Component} from 'react';
import styled from 'styled-components';

const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2%;
    margin-left: 16%;
    > div {
        flex-basis: 25%;
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
