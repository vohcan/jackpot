import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import JackpotNav from './JackpotNav'
import SecondaryNav from './SecondaryNav'
import Results from './Results'
import JackpotList from './JackpotList'
import JackpotAside from './JackpotAside'

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      jackpots:[]
    }
  }
  
  componentWillMount(){
  this.loadJackpots();
  
  }
  loadJackpots(){
    var url = "https://media.lottoland.com/api/drawings/euroJackpot";
    fetch(url)
    .then(data=>data.json())
    .then(jackpots=>this.setState({jackpots}))
  }
  render() {
    
    let resultNumbers =[4,14,22,33,42]
    let drawingDate= "23.03.18"
    let odds = [
     "apuesta1",
     "apuesta2",
     "apuesta3",
     "apuesta4"
    ] 

    return(
      <div>
        <Header/>
        <JackpotNav/>
        <SecondaryNav/>
        <div className="container">
          <Results rnumbers={resultNumbers} date = {drawingDate}/>
          <div className="row">
            <JackpotList odds ={odds}/>
            <JackpotAside/>
          </div>        
        </div>
      </div>
    );
  }

}
export default App;
