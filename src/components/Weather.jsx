import React from "react";

class Weatherclass extends React.Component{
  constructor(props) {
      super(props)
      this.state ={
          arrayoftemps: []
      }
  
  }
  componentDidMount() {
      fetch('http://localhost:4015/weather')
           .then(res => res.json())
           .then(data => this.setState({arrayoftemps: data.current}));
  }

  render(){
    console.log(this.state.arrayoftemps)
    let props = this.state.arrayoftemps
    if (props.temp > 70) {
    return(
    <div className="weatherApp">
    <br></br>
    <h1  align = "center" >Current Temperature Reading</h1>
    <div class="container">
      <div >
        <div>
          <h2 align = "center" class="font-weight-light" > <b>{props.temp}°F in Fremont, CA</b></h2>
        </div>
      </div>
      <div>
          <h2 align = "center"> <b>No need for a jacket!</b></h2>
        </div>
      <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://i.pinimg.com/originals/f8/6e/5f/f86e5f5a0f148f95e5ba6089de36cfcb.gif"
              alt=""
              width="600"
              height="600"
            />
      
    </div>
    </div>
  
  )
    } else {
      return(
        <div className="weatherApp">
        <br></br>
        <h1  align = "center" >Current Temperature Reading</h1>
        <div class="container">
          <p></p>
          <p></p>
          <div >
            <div>
              <h2 class="font-weight-light" align = "center"> <b>{props.temp}°F in Fremont, CA </b></h2>
            </div>
          </div>
          <div>
              <h2  align = "center"> <b>Wear a jacket!</b></h2>
            </div>
          <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  src="https://media3.giphy.com/media/l2SqfW6uDn5DcE4PS/giphy.gif?cid=ecf05e4773wv58k5phojkfbelfn15ahfeaoo59kdowtm8cjf&rid=giphy.gif"
                  alt=""
                  width="600"
                  height="600"
                />
          
        </div>
        </div>
      
      )

    }
  }
}

export default Weatherclass;