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
                <tr>
                {odds.map((odd,index) =><th key={index}>{odd}</th>)}
                </tr>
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                </tr>
                </tbody>
              </table>
              
            </div>
        )
    }
}
export default JackpotList