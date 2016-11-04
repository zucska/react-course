import React, { Component } from 'react';
import './App.css';
import ListCmp from './components/list'
import axios from 'axios'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      items: [],
      search:'Quentin%20Tarantino'
    }


    this.aggiornaFeed = this.aggiornaFeed.bind(this)
  }


  aggiornaFeed(){

    axios.get('http://netflixroulette.net/api/api.php?director=James+Cameron')
      .then( (response) => {
        console.log(response.data);
        this.setState({items:response.data})
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  componentDidMount() {

    axios.get('http://netflixroulette.net/api/api.php?director='+this.state.search)
      .then( (response) => {
        console.log(response.data);
        this.setState({items:response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  render() {
    const {items} = this.state;
    return (
      <div className="App">
        <ListCmp data={items} cliccami={this.aggiornaFeed} />
      </div>
    );
  }
}

export default App;
