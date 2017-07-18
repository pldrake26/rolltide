import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header.js';
import SectionHeader from './SectionHeader.js';
import Dates from './Dates.js';
import Footer from './Footer.js';

const Container = styled.div`
    background-color: #A60B35;
    border-radius: 5px;
    padding: 1em;
    color: white;
    font-family: Tahoma;
    > div h1, h2, h3 {
        font-weight: bold;
    }
`

export default class App extends Component {
    render() {
        return (
            <Container>
                <Header />
                <hr/>
                <h3>Schedule:</h3>
                <small>&#42;All times are Central Time unless otherwise noted.</small>
                <SectionHeader />
                <Dates date="Sep 2" team="Florida State Seminoles" time="7:00pm" final="TBD" />
                <Dates date="Sep 9" team="Fresno State Bulldogs" time="2:30pm" final="TBD" />
                <Dates date="Sep 16" team="Colorado State Rams" time="6:00pm" final="TBD" />
                <Dates date="Sep 23" team="&#64;&nbsp;Vanderbilt Commodores" time="TBD" final="TBD" />
                <Dates date="Sep 30" team="Ole Miss Rebels" time="TBD" final="TBD" />
                <Dates date="Oct 7" team="&#64;&nbsp;Texas A&M Aggies" time="TBD" final="TBD" />
                <Dates date="Oct 14" team="Arkansas Razorbacks" time="TBD" final="TBD" />
                <Dates date="Oct 21" team="Tennessee Volunteers" time="TBD" final="TBD" />
                <Dates date="Oct 28" team="OPEN DATE" time="" final="" />
                <Dates date="Nov 4" team="LSU Tigers" time="TBD" final="TBD" />
                <Dates date="Nov 11" team="&#64;&nbsp;Mississippi State Bulldogs" time="TBD" final="TBD" />
                <Dates date="Nov 18" team="Mercer Bears" time="TBD" final="TBD" />
                <Dates date="Nov 25" team="&#64;&nbsp;Auburn Tigers" time="TBD" final="TBD" />
                <Dates date="Dec 2" team="SEC Championship Game" time="3:00pm Central Time" final="TBD" />
                <hr/>
                <Footer />
            </Container>
        );
    }
}
