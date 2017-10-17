import React, { Component } from 'react';
import Player from './player.js';
import { Grid, Row, Col } from 'react-bootstrap';
import "./player-status.css";

class PlayerStatus extends Component {

    render() {
        let player = new Player();
        return (
            <div className="playerStatus">
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col md={3}>
                            <HealthStatus/>
                        </Col>
                        <Col md={3}>
                            <Level/>
                        </Col>
                        <Col md={3}>    
                            <Weapon/>
                        </Col>
                        <Col md={3}>
                            <XP/>
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
            <h3 className="healthStatus">Health: 1000</h3>
        )
    }
}

class Level extends Component {

    render() {
        return (
            <h3 className="level"><strong>Level:</strong> 45</h3>
        )
    }
}

class Weapon extends Component {

    render() {
        return (
            <h3 className="weapon">Weapon: 66</h3>
        )
    }
}

class XP extends Component {
  
    render() {
        return (
            <h3 className="xp">XP: 33</h3>
        )
    }
}

export default PlayerStatus; 