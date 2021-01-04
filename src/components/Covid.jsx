import React from "react";

class Covidclass extends React.Component{

  constructor(props) {
    super(props)
    this.state ={
        arrayofstats: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/covid',{headers:{'Content-Type':'application/json', 'Accept': 'application/json'}})
         .then(res => res.json())
         .then(data => this.setState({arrayofstats: data}));
  }

  render(){
    console.log(this.state.arrayofstats)
    return(
    <div className="covid">
    <br></br>
    <h1 class="font-weight-light" align = "center" >Today's Covid Report</h1>
    <div class="container">
      <div class="row align-items-center my-5">
        <h1 style={{ color: 'black' }} class="font-weight-light">{this.state.arrayofstats.headlines}</h1>
          <p>
            {this.state.arrayofstats.report}
          </p>
      </div>
    </div>
  </div>
  )
  }
 
}

export default Covidclass;