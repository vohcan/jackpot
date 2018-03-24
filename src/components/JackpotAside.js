import React, { Component } from 'react';
class JackpotAside extends Component{
    render(){
        return(
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
        )
    }

}
export default JackpotAside