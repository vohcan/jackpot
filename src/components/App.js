import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import JackpotNav from './JackpotNav'
import SecondaryNav from './SecondaryNav'
import Results from './Results'
import JackpotList from './JackpotList'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {jackpots: []}
  }
  componentWillMount(){
    var url = "https://www.lottoland.com/api/drawings/euroJackpot";
    fetch(url).then((response)=>{
      console.log(response);
      //console.log(response.json());
      return response.json()
    })
    .then((jackpots)=>{
      console.log(jackpots.last.numbers);
      this.setState({ jackpots: jackpots })
      console.log(jackpots);
      console.log(jackpots.last.date);
      //for date
      let date =document.getElementById("DateBtn");
      date.innerHTML= `${jackpots.last.date.dayOfWeek}, ${jackpots.last.date.day}/${jackpots.last.date.month}/${jackpots.last.date.year}`;
      let subTtl =document.getElementById("subtileRes");
      subTtl.innerHTML= `EuroJackpot Results for ${jackpots.last.date.dayOfWeek}, ${jackpots.last.date.day}/${jackpots.last.date.month}/${jackpots.last.date.year}`;
    });
  }
  render() {
    return(
      <div>
        <Header/>
        <JackpotNav/>
        <SecondaryNav/>
        <div className="container">
          <h5><strong>EUROJACKPOT RESULTS & WINNING NUMBERS</strong></h5> 
          <div id="DateBtn">Fecha</div>
          <hr/> 
          <h6 id="subtileRes">EuroJackpot Results for</h6> 
          <div id="ResultTag">3</div>
          <hr/>
          <div className="row">
            <div className="col-8">
              <table className="table table-bordered">
                <thead>
                  <tr>
                     <th scope="col">Tier</th>
                     <th scope="col">Match</th>
                     <th scope="col">Winners</th>
                     <th scope="col">Amount</th>
                   </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <p><strong>The EuroJackpot numbers for 16.03.2018</strong><br/>
                  The 313th draw for the EuroJackpot was held on 16.03.2018, as usual at 9pm in Helsinki.</p> 
                </div>
              </div>        
              <div className="card">
                <div className="card-body">
                  <p><strong>EuroJackpot numbers for 16.03.2018</strong><br/>
                    The balls used for the draw are made of a synthetic polymer, softer than ping-pong balls. The results are broadcast after the draw, with the draw-machines independently checked by the VTT Technical Research Center of Finland.</p>
        
                  <p>Lottoland published the draw results immediately after the draw on 16.03.2018. You can easily check your tickets here at Lottoland, or purchase your ticket for the next draw.</p> 
                </div>
              </div>        
            </div>
          </div>
          
          
          <JackpotList/>
        </div>
      </div>
    )
    
    // if(this.state.jackpots.length>0){
    //   return(
    //     <div className = "container">
    //       <JackpotList listado={this.state.jackpots} />
    //     </div>
    //   )
    // }else{
    //   return <p className= "text-center">Cargando datos... </p>
    
    // return (
      
    //   <div className="App">


    //     <div className="container">
    //         <div className="row">
    //           <div className="col-sm">
    //             One of three columns
    //           </div>
    //           <div className="col-sm">
    //             One of three columns
    //           </div>
    //           <div className="col-sm">
    //             One of three columns
    //           </div>
    //         </div>
    //     </div>
    //     <div className="container">
    //       <div className="btn-group btn-group-lg" data-toggle="buttons">
    //           <button type="button" className="btn btn-primary" id="btn">datos</button>
    //           <button type="button" className="btn btn-primary" id="btn2">datos</button>
    //           <button type="button" className="btn btn-primary" id="btn3">datos</button>
    //       </div>
    //       <div className="row">
    //         <div className="col-8">
    //           
    //           <table className="table table-bordered">
    //             <thead>
    //               <tr>
    //                 <th scope="col">Tier</th>
    //                 <th scope="col">Match</th>
    //                 <th scope="col">Winners</th>
    //                 <th scope="col">Amount</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               <tr>
    //                 <th scope="row">1</th>
    //                 <td>Mark</td>
    //                 <td>Otto</td>
    //                 <td>@mdo</td>
    //               </tr>
    //               <tr>
    //                 <th scope="row">2</th>
    //                 <td>Jacob</td>
    //                 <td>Thornton</td>
    //                 <td>@fat</td>
    //               </tr>
    //               <tr>
    //                 <th scope="row">3</th>
    //                 <td>Larry</td>
    //                 <td>the Bird</td>
    //                 <td>@twitter</td>
    //               </tr>
    //             </tbody>
    //           </table>        
    //         </div>


  }

}


export default App;
