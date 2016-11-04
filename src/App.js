import React, { Component } from 'react';
import FeedComponent from './components/FeedComponent'

class App extends Component {

  render() {
    return (
      <div className="App">
        <FeedComponent url="http://beta.json-generator.com/api/json/get/EkGsXuBeG" />
        <FeedComponent url="http://beta.json-generator.com/api/json/get/4kFSw9rxG" />
      </div>
    );
  }

}

export default App;