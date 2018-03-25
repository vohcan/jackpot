import React, { Component } from 'react';

class JackpotList extends Component {
    render(){
      let odds =this.props.odds
        return(
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
              <ul>
              {odds.map((odd,index) =><li key={index}>{odd}</li>)}
              </ul>
            </div>
        )
    }
}
export default JackpotList