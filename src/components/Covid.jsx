import React from "react";

function Covid(props) {
  return(
    <div class="col">
          <h1 class="font-weight-light">{props.headlines}</h1>
          <p>
            {props.report}
          </p>
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
    fetch('http://localhost:4007/covid',{headers:{'Content-Type':'application/json', 'Accept': 'application/json'}})
         .then(res => res.json())
         .then(data => this.setState({arrayofstats: data}));
  }

  render(){
    let mappedCovid = this.state.arrayofstats.map(item => 
    <Covid headlines={item.headlines} report = {item.report} />)
    return(
    <div className="covid">
    <p>  </p>
    <h1 class="font-weight-light" align = "center" ><b>Today's Covid Report</b></h1>
    <div class="container">
      <div class="row align-items-center my-5">
        {mappedCovid}
      </div>
    </div>
  </div>
  )
  }
 
}

export default Covidclass;