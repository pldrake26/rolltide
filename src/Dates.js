import React, {Component} from 'react';
import styled from 'styled-components';

const styles = {
  borderTop: "2px solid #A60B35",
  padding: "2em",
}

export default class Dates extends Component {
  render() {
    return (
        <div className="row" style={styles}>
          <div className="col-sm"><img src={this.props.helmet} alt="Team Helmet" width="75" height="auto"/></div>
          <div className="col-sm mt-sm-4">{this.props.date}</div>
          <div className="col-sm mt-sm-4">{this.props.team}</div>
          <div className="col-sm mt-sm-4">{this.props.time}</div>
          {
            this.props.outcome === "WIN" ? <div className="col-sm mt-sm-4 text-success">{this.props.outcome} {this.props.final}</div> : this.props.outcome === "LOSE" ? <div className="col-sm mt-sm-4 text-danger">{this.props.outcome} {this.props.final}</div> : <div className="col-sm mt-sm-4 text-primary">{this.props.outcome} {this.props.final}</div>
          }
        </div>
    );
  }
}
