import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header.js';
import Dates from './Dates.js';
import Footer from './Footer.js';
import FloridaLogo from './images/fsu.jpg';
import BullDogs from './images/bulldogs.png';
import ColoradoState from './images/colo-rams.jpg';
import Commodores from './images/commodores.png';
import Rebels from './images/rebels.png';
import Aggies from './images/aggies.png';
import Razorbacks from './images/razorbacks.png';
import Vols from './images/vols.png';
import Tide from './images/tide.jpg';
import LsuTigers from './images/lsutigers.png';
import MissState from './images/miss-state.jpg';
import MercerBears from './images/mercer.jpg';
import AuburnTigers from './images/autigers.jpg';

const Container = styled.div `
    background-color: white;
    border-radius: 5px;
    color: #A60B35;
    font-family: Tahoma;
    margin: 0.5%;
    > h2 {
        text-align: center;
    }
    > h3 {
        margin-top: 3%;
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
        <h2>2017 Football Schedule and Scores</h2>
        <h3>Schedule:</h3>
        <small>&#42;All times are Central Time unless otherwise noted.</small>
        <Dates helmet={FloridaLogo} date="September 2" team="Florida State Seminoles" time="7:00pm" final="TBD"/>
        <Dates helmet={BullDogs} date="September 9" team="Fresno State Bulldogs" time="2:30pm" final="TBD"/>
        <Dates helmet={ColoradoState} date="September 16" team="Colorado State Rams" time="6:00pm" final="TBD"/>
        <Dates helmet={Commodores} date="September 23" team="&#64;&nbsp;Vanderbilt Commodores" time="TBD" final="TBD"/>
        <Dates helmet={Rebels} date="September 30" team="Ole Miss Rebels" time="TBD" final="TBD"/>
        <Dates helmet={Aggies} date="October 7" team="&#64;&nbsp;Texas A&M Aggies" time="TBD" final="TBD"/>
        <Dates helmet={Razorbacks} date="October 14" team="Arkansas Razorbacks" time="TBD" final="TBD"/>
        <Dates helmet={Vols} date="October 21" team="Tennessee Volunteers" time="TBD" final="TBD"/>
        <Dates helmet={Tide} date="October 28" team="OPEN DATE" time="" final=""/>
        <Dates helmet={LsuTigers} date="November 4" team="LSU Tigers" time="TBD" final="TBD"/>
        <Dates helmet={MissState} date="November 11" team="&#64;&nbsp;Mississippi State Bulldogs" time="TBD" final="TBD"/>
        <Dates helmet={MercerBears} date="November 18" team="Mercer Bears" time="TBD" final="TBD"/>
        <Dates helmet={AuburnTigers} date="November 25" team="&#64;&nbsp;Auburn Tigers" time="TBD" final="TBD"/>
        <Dates helmet={Tide} date="December 2" team="SEC Championship Game" time="3:00pm Central Time" final="TBD"/>
        <Footer/>
      </Container>
    );
  }
}
