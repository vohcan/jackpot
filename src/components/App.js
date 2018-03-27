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
    let jk = this.state.jackpots
    
    if(!this.state.jackpots.last){
      return(<p>Loading...</p>)
    }
    else{
      const {
        Winners,
        climbedSince,
        closingDate,
        currency,
        date,
        drawingDate,
        euroNumbers,
        jackpot,
        lateClosingDate,
        marketingJackpot,
        nr,
        numbers,
        odds,
        specialMarketingJackpot
      } = this.state.jackpots.last;
      var num =numbers.map((number) =><th key={number}>{number}</th>)
      var result= numbers.map((number,index) =><li key={index}>{number}</li>)
      var euro = euroNumbers.map((euroNumber,indexe) =><li className = "eur" key={indexe}>{euroNumber}</li>)
      var dated = <p>{date.day}/{date.month}/{date.year}</p>


    }

    return(
      <div>
        <Header/>
        <JackpotNav/>
        <SecondaryNav/>
        <div className="container">
        
          <Results  result = {result} date = {dated} euroNumbers = {euro}/>
          <div className="row">
            <JackpotList/>
            <JackpotAside/>
          </div>        
        </div>
      </div>
    );
  }

}
export default App;
