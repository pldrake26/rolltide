import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header.js';
import SectionHeader from './SectionHeader.js';
import Dates from './Dates.js';
import Footer from './Footer.js';

const Container = styled.div `
    background-color: #A60B35;
    border-radius: 5px;
    padding: 1em;
    color: white;
    font-family: Tahoma;
    > h2 {
        text-align: center;
    }
    > h2, h3 {
        font-weight: bold;
    }
`

export default class App extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <hr/>
                <h2>2017 Football Schedule and Scores</h2>
                <h3>Schedule:</h3>
                <small>&#42;All times are Central Time unless otherwise noted.</small>
                <SectionHeader/>
                <Dates date="September 2" team="Florida State Seminoles" time="7:00pm" final="TBD"/>
                <Dates date="September 9" team="Fresno State Bulldogs" time="2:30pm" final="TBD"/>
                <Dates date="September 16" team="Colorado State Rams" time="6:00pm" final="TBD"/>
                <Dates date="September 23" team="&#64;&nbsp;Vanderbilt Commodores" time="TBD" final="TBD"/>
                <Dates date="September 30" team="Ole Miss Rebels" time="TBD" final="TBD"/>
                <Dates date="October 7" team="&#64;&nbsp;Texas A&M Aggies" time="TBD" final="TBD"/>
                <Dates date="October 14" team="Arkansas Razorbacks" time="TBD" final="TBD"/>
                <Dates date="October 21" team="Tennessee Volunteers" time="TBD" final="TBD"/>
                <Dates date="October 28" team="OPEN DATE" time="" final=""/>
                <Dates date="November 4" team="LSU Tigers" time="TBD" final="TBD"/>
                <Dates date="November 11" team="&#64;&nbsp;Mississippi State Bulldogs" time="TBD" final="TBD"/>
                <Dates date="November 18" team="Mercer Bears" time="TBD" final="TBD"/>
                <Dates date="November 25" team="&#64;&nbsp;Auburn Tigers" time="TBD" final="TBD"/>
                <Dates date="December 2" team="SEC Championship Game" time="3:00pm Central Time" final="TBD"/>
                <hr/>
                <Footer/>
            </Container>
        );
    }
}
