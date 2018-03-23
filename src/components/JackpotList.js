import React, { Component } from 'react';
import JackpotRow from './JackpotRow'

class JackpotList extends Component {
    render(){
        return(
            <div>
                <h2>este es el jackpotList</h2>
                <JackpotRow/>
            </div>
        )
        
        //return(
            // <div className= "container-fluid">
            // <ul className="media-list">
            //     {
            //         this.props.map((jackpot)=>{
            //             return <JackpotRow key={jackpot.last.odds[i]}
            //                                 winners={jackpot.last.odss.winners}
            //         })
            //     }
            // </ul>
            
            // </div>
           
        //)

    }
}
export default JackpotList