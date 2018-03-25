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
    super(props)
    this.state = {jackpots:[]}
    
  }
  componentWillMount(){
    var url = "https://www.lottoland.com/api/drawings/euroJackpot";
    fetch(url)
    .then(data=>data.json())
    .then(function(data){
      this.setState(data)});
    

  }
 
  render() {

    let resultNumbers =[4,14,22,33,42]
    let drawingDate= "23.03.18"
    let odds = [
     "apuesta1",
     "apuesta2",
     "apuesta3",
     "apuesta4",
     "apuesta5",
     "apuesta6",
     "apuesta7",
     "apuesta8",
     "apuesta9",
     "apuesta10",
     "apuesta11",
     "apuesta12"
    ]
  
    

    let views =<div>Loading...</div>;
    const {jackpots} = this.state;
    if(jackpots && jackpots.length >0){
      views = this.state.jackpots.map((s,index)=>(
        <div key={index}>
        <p>{s.numbers}</p>

        </div>
      ))
    }

    return(
      <div>
        <Header/>
        <JackpotNav/>
        <SecondaryNav/>
        <div className="container">
        
         {views}
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
