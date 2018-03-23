// import React, { Component } from 'react'

// class Results extends Component {

//     constructor(props){
//       super(props)
//       this.state = {results:[]}
//     }
//     componentWillMount(){
//       var url = "https://www.lottoland.com/api/drawings/euroJackpot";
//       fetch(url).then((resp)=>{
//         console.log(resp);
//         console.log(resp.json());
//         return resp.json()
//       })
//       .then((results)=>{
//         this.setState({ results: results })  
//         var data =results.last.odds;
//         console.log(data);
//         console.log(data.rank0);
//       });
//     }
//     render() {
//       return(
//         <div>
//           <div className="container">
//             <h6>EuroJackpot Results for Friday 16 Mar 2018</h6> 
//             <div id="ResultTag">3</div>
//             <hr/> 
//           </div>
//         </div>
//       )
//     }
// }
// export default Results