import React, { Component } from 'react';

class JackpotList extends Component {
    render(){
        
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
            </div>
        )
    }
}
export default JackpotList