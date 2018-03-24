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
    this.state = {jackpots:{}}
  }
  componentWillMount(){
    var url = "https://www.lottoland.com/api/drawings/euroJackpot";

    fetch(url)
    .then(data=>data.json())
    .then(jackpots => this.setState({jackpots}));
    //.then(data=>data.map(numbers=))
 
    // fetch(url).then((data)=>{ data.json()
    // })
    // .then((jackpots)=>{
    //   //console.log(jackpots.last.numbers);
    //   this.setState({ jackpots: jackpots })
    //   console.log(jackpots.last.numbers);
    //   //console.log(jackpots.last.numbers);
    //   //for date
    //   // let date =document.getElementById("DateBtn");
    //   // date.innerHTML= `${jackpots.last.date.dayOfWeek}, ${jackpots.last.date.day}/${jackpots.last.date.month}/${jackpots.last.date.year}`;
    //   // let subTtl =document.getElementById("subtileRes");
    //   // subTtl.innerHTML= `EuroJackpot Results for ${jackpots.last.date.dayOfWeek}, ${jackpots.last.date.day}/${jackpots.last.date.month}/${jackpots.last.date.year}`;
    // });
  }
  render() {
    var last = JSON.stringify(this.state.jackpots.last);
    console.log(last);

    return(
      <div>
        <Header/>
        <JackpotNav/>
        <SecondaryNav/>
        <div className="container">
        
         
          <h4>{last}</h4>
          <Results/>
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
