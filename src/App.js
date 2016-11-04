import React, { Component } from 'react';
import ListComponent from './components/ListComponent'
import axios from 'axios'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      items: [], // valore iniziale
      feed:'http://beta.json-generator.com/api/json/get/EkGsXuBeG'
    }

    this.aggiornaFeed = this.aggiornaFeed.bind(this)
  }


  aggiornaFeed(){

    axios.get(this.state.feed)
      .then( response => {
        this.setState({ items:response.data })
      })
      .catch( error => {
        console.log(error);
      });

  }

  componentDidMount() {
    this.aggiornaFeed()
  }
  
  render() {
    const {items} = this.state;
    return (
      <div className="App">
        <ListComponent data={items} />
      </div>
    );
  }
}

export default App;
