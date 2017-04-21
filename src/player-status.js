import React, { Component } from 'react';
import Player from './player.js';
import { Grid, Row, Col } from 'react-bootstrap';

let style = {
    playerStatusPanel: {
       // display: "flow",
        position: "fix"
    },
    healthStatus: {
        display: "inline-block"
    }
}
class PlayerStatus extends Component {

    render() {
        let player = new Player();
        return (
            <div className="playerStatus" style={style.playerStatusPanel}>
                <Grid fluid="true">
                    <Row className="show-grid">
                        <Col md={3}>
                            <HealthStatus style={style.healthStatus}></HealthStatus>
                        </Col>
                        <Col md={3}>
                           <h3><strong>Level:</strong> 45</h3>
                        </Col>
                        <Col md={3}>    
                            <h3>Weapon: 66</h3>
                        </Col>
                        <Col md={3}>
                            <h3>XP: 33</h3>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

class HealthStatus extends Component {

    render() {
        return (
            <h3>Health: 1000</h3>
        )
    }
}
export default PlayerStatus; 