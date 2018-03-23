import React, { Component } from 'react'

class JackpotNav extends Component{
    render(){
        return(
            <div>    
             <nav className="navbar navbar-expand-lg bg-light ">
            
               <div className="container" id="navbarNav">
                 <ul className="navbar-nav justify-content-center">
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
            </div>
        )
    }

}
export default JackpotNav