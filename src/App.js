import React, { Component } from 'react';
import './App.css';
import { FormControl, FormGroup, InputGroup, Glyphicon } from 'react-bootstrap';
class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-title">Music App</div>
          <FormGroup>
          <InputGroup>
          <FormControl type="text" placeholder="Search for artist"/>
            <InputGroup.Addon>
              <Glyphicon glyph="search"> </Glyphicon> 
            </InputGroup.Addon>
          </InputGroup>
          </FormGroup>
          <div className="profile">
            <div>Artist Picture</div>
            <div>Artist Name</div>
          </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
