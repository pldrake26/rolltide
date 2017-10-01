import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header.js';
import Dates from './Dates.js';
import Footer from './Footer.js';
import SectionHeader from './SectionHeader.js';
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

const styles = {
  color: "#A60B35",
  fontWeight: "bold",
}

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={styles}>
        <Header/>
        <h3 className="text-center pt-5 pb-5">2017 Football Schedule and Scores</h3>
        <h4>Schedule:</h4>
        <small><p>&#42;All times are Central Standard Time unless otherwise noted.</p></small>
        <SectionHeader/>
        <Dates helmet={FloridaLogo} date="September 2" team="Florida State Seminoles" time="7:00pm" outcome="WIN" final="24-7"/>
        <Dates helmet={BullDogs} date="September 9" team="Fresno State Bulldogs" time="2:30pm" outcome="WIN" final="41-10"/>
        <Dates helmet={ColoradoState} date="September 16" team="Colorado State Rams" time="6:00pm ESPN2" outcome = "WIN" final="41-23"/>
        <Dates helmet={Commodores} date="September 23" team="&#64;&nbsp;Vanderbilt Commodores" time="2:30pm CBS" outcome="WIN" final="59-0"/>
        <Dates helmet={Rebels} date="September 30" team="Ole Miss Rebels" time="8:00pm ESPN" outcome="WIN" final="66-3"/>
        <Dates helmet={Aggies} date="October 7" team="&#64;&nbsp;Texas A&M Aggies" time="TBD" outcome="" final="TBD"/>
        <Dates helmet={Razorbacks} date="October 14" team="Arkansas Razorbacks" time="TBD" outcome="" final="TBD"/>
        <Dates helmet={Vols} date="October 21" team="Tennessee Volunteers" time="TBD" outcome="" final="TBD"/>
        <Dates helmet={Tide} date="October 28" team="OPEN DATE" time="" outcome="" final=""/>
        <Dates helmet={LsuTigers} date="November 4" team="LSU Tigers" time="TBD" outcome="" final="TBD"/>
        <Dates helmet={MissState} date="November 11" team="&#64;&nbsp;Mississippi State Bulldogs" time="TBD" outcome="" final="TBD"/>
        <Dates helmet={MercerBears} date="November 18" team="Mercer Bears" time="TBD" outcome="" final="TBD"/>
        <Dates helmet={AuburnTigers} date="November 25" team="&#64;&nbsp;Auburn Tigers" time="TBD" outcome="" final="TBD"/>
        <Dates helmet={Tide} date="December 2" team="SEC Championship Game" time="3:00pm Central Time" outcome="" final="TBD"/>
        <Footer/>
      </div>
    );
  }
}
