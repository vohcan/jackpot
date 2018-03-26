import React, { Component } from 'react'

class Results extends Component {

    render() {

      let numbers =this.props.rnumbers
      return(
        <div>
          <h5><strong>EUROJACKPOT RESULTS & WINNING NUMBERS</strong></h5> 

          <div id="DateBtn">{this.props.date}</div>
          <hr/> 
          <h6 id="subtileRes">EuroJackpot Results for {this.props.date}</h6> 
          <div id="ResultTag">
            <ul className ="jkNumbers">
            {numbers.map((number,index) =><li key={index}>{number}</li>)}
            </ul>
          </div>
          <hr/>
        </div>
        
      
      )
    }
}
export default Results