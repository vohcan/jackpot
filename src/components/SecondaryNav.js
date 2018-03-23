import React, { Component } from 'react'

class SecondaryNav extends Component{
    render(){
        return(
            <div className="container">
                <div className="btn-group btn-group-lg" data-toggle="buttons" id="btnGroup">
                    <button type="button" className="btn btn-outline-secondary" id="btn">EuroJackpot</button>
                    <button type="button" className="btn btn-outline-secondary active" id="btn2">EuroJackpot Results & Prize Breakdown</button>
                    <button type="button" className="btn btn-outline-secondary" id="btn3">EuroJackpot Help & FAQ
                    </button>
                </div>
            </div>
        )
    }

}
export default SecondaryNav