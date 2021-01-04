import React from "react";

class Weatherclass extends React.Component{
  constructor(props) {
      super(props)
      this.state ={
          arrayoftemps: []
      }
  
  }
  componentDidMount() {
      fetch('http://localhost:4007/weather')
           .then(res => res.json())
           .then(data => this.setState({arrayoftemps: data.current}));
  }

  render(){
    console.log(this.state.arrayoftemps)
    let props = this.state.arrayoftemps
    return(
    <div className="weather">
    <br></br>
    <h1 class="font-weight-light" align = "center" >Current Weather Readings. Most up to date.</h1>
    <div class="container">
      <div class="row align-items-center my-5">
        <p> Although it feels like {props.feels_like} degrees fahrenheit it is actually {props.temp} degrees fahrenheit.</p>
      </div>
    </div>
  </div>
  )
  }
}

export default Weatherclass;