import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
            <h1>App Ref. Card 02 Lea Edited this Text for version 2</h1>
            <div className="message">
              react app ... up and running
            </div>
        </Col>
        <Row>
          <Col>
            <div className="loop-wrapper">
              <div className="mountain"></div>
              <div className="hill"></div>
              <div className="tree"></div>
              <div className="tree"></div>
              <div className="tree"></div>
              <div className="rock"></div>
              <div className="truck"></div>
              <div className="wheels"></div>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default App;
