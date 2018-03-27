import React, { Component } from 'react'

class Results extends Component {

    render() {

      let result = this.props.result
      let date = this.props.date
      let euro= this.props.euroNumbers
      return(
        <div>
          <h5><strong>EUROJACKPOT RESULTS & WINNING NUMBERS</strong></h5> 

          <div id="DateBtn">{date}</div>
          <hr/> 
          <h6 id="subtileRes">EuroJackpot Results for {date}</h6> 
          <div id="ResultTag">
            <ul className ="jkNumbers">
            {result}
            {euro}
            </ul>
           
          </div>
          <hr/>
        </div>
        
      
      )
    }
}
export default Results