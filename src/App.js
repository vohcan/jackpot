import React, { Component } from 'react';
import logo from './resources/ll-logo-green.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ciklum</h1>
        </header>
      
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item ">
                <a className="nav-link">PowerBall</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">EuroMillons</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" id="pot">Eurojackpot</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">More jackpots</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Syndicates</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Scratchcards</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Instant Win</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Games</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h4>EUROJACKPOT RESULTS & WINNING NUMBERS</h4> 
              <hr/> 
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>        
            </div>
            <div className="col-3">
              <p><strong>The EuroJackpot numbers for 16.03.2018</strong><br/>
              The 313th draw for the EuroJackpot was held on 16.03.2018, as usual at 9pm in Helsinki.</p>        
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;
