import React, { Component } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootswatch-superhero.css';
import './css/App.css';

import Module from './js/components/PageName/Module';

class App extends Component {
  constructor() {
    super()
    this.state = {
      someNumber: 30
    }
  }

  render() {
    const handlers = {
      someNumber: this.state.someNumber
    };

    return (
      <div>
        <Navbar inverse>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                BROWplay
              </Navbar.Brand>
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Grid>
          <Row>
            <Col md={12}>
              <Module />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
