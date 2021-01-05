import React from "react";

function Covid(props) {
  return(
    <div class="col">
          <h2>{props.headlines}</h2>
          <h2 class="font-weight-light">{props.report}</h2>
        </div>
  )
}

class Covidclass extends React.Component{

  constructor(props) {
    super(props)
    this.state ={
        arrayofstats: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4011/covid',{headers:{'Content-Type':'application/json', 'Accept': 'application/json'}})
         .then(res => res.json())
         .then(data => this.setState({arrayofstats: data}));
  }

  render(){
    let mappedCovid = this.state.arrayofstats.map(item => 
    <Covid headlines={item.headlines} report = {item.report} />)
    return(
    <div className="covid">
    <h1 class="font-weight-light" align = "center" ><b>Daily COVID-19 Report</b></h1>
    <div class="container">
      <div >
        {mappedCovid}
      </div>
<div class="centerImage" >
    <img
              class="center"
              src="https://www.nhpr.org/sites/nhpr/files/styles/medium/public/202011/CoronavirusBall_red_CDChighrez.png"
              alt=""
            />
            
            </div>
            
    </div>
  </div>

  )
  }
 
}

export default Covidclass;