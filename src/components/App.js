import React, { Component } from 'react';
import logo from '../resources/ll-logo-green.svg';
import '../App.css';
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
      //console.log(jackpots.last.numbers);
      this.setState({ jackpots: jackpots })
    });
  }
  render() {
    return(
      <div>
        <h2>este es el app</h2>
        <JackpotList/>
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
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to Ciklum</h1>
    //     </header>
      
    //     <nav className="navbar navbar-expand-lg bg-light ">
    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav justify-content-center">
    //           <li className="nav-item ">
    //             <a className="nav-link">PowerBall</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link">EuroMillons</a>
    //           </li>
    //           <li className="nav-item ">
    //             <a className="nav-link" id="pot">Eurojackpot</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link">More jackpots</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link">Syndicates</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link">Scratchcards</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link">Instant Win</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link">Games</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
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
    //           <h4>EUROJACKPOT RESULTS & WINNING NUMBERS</h4> 
    //           <hr/> 
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

    //         <div className="col-3">
    //           <div className="card">
    //             <div className="card-body">
    //               <p><strong>The EuroJackpot numbers for 16.03.2018</strong><br/>
    //               The 313th draw for the EuroJackpot was held on 16.03.2018, as usual at 9pm in Helsinki.</p> 
    //             </div>
    //           </div>        
    //           <div className="card">
    //             <div className="card-body">
    //               <p><strong>EuroJackpot numbers for 16.03.2018</strong><br/>
    //               The balls used for the draw are made of a synthetic polymer, softer than ping-pong balls. The results are broadcast after the draw, with the draw-machines independently checked by the VTT Technical Research Center of Finland.</p>

    //               <p>Lottoland published the draw results immediately after the draw on 16.03.2018. You can easily check your tickets here at Lottoland, or purchase your ticket for the next draw.</p> 
    //             </div>
    //           </div>        
    //         </div>
            
            
    //         </div>
    //         </div>
            
            
    //   </div>
     
    // );
    //fin return raw
  }

}


export default App;
