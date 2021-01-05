import React from "react";

class Weatherclass extends React.Component{
  constructor(props) {
      super(props)
      this.state ={
          arrayoftemps: []
      }
  
  }
  componentDidMount() {
      fetch('http://localhost:4014/weather')
           .then(res => res.json())
           .then(data => this.setState({arrayoftemps: data.current}));
  }

  render(){
    console.log(this.state.arrayoftemps)
    let props = this.state.arrayoftemps
    return(
    <div className="weather">
    <br></br>
    <h1  align = "center" >Current Temperature Reading</h1>
    <div class="container">
      <p></p>
      <p></p>
    {/* <div class="row align-items-center my-5"> */}
    <div>
    <h2 class="font-weight-light" align = "center"> Although it feels like <b>{props.feels_like}</b> °F, it is actually <b>{props.temp}</b> °F.</h2>
    </div>
    </div>
    
    <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif"
              alt=""
              width="600"
              height="600"
            />
  </div>

  
  )
  }
}

export default Weatherclass;