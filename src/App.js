import React, { Component } from 'react';
import './App.css';
import { FormControl, FormGroup, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query : '',
      artist: null
    }
  }
  search(){
    console.log('this.state', this.state);

    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    console.log('FETCH_URL', FETCH_URL);
    fetch(FETCH_URL, {

      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artist.items[0];
      console.log('artist', artist);
      this.setState({artist});
    });
  }
  render(){
    return(
      <div className="App">
        <div className="App-title">Music App</div>
          <FormGroup>
          <InputGroup>
          <FormControl type="text" placeholder="Search for artist"
          value = {this.state.query}
          onChange={event =>{this.setState({query:event.target.value})}}
          onKeyPress={event => {
            if (event.key === 'Enter'){
              this.search()
            }
          }}/>
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"> </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
          </FormGroup>
          <Profile
            artist={this.state.artist}
          />

        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
