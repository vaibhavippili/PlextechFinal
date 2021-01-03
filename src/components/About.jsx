import React from "react";

function Names(props){
  return(
    <div class="col">
          <h1 class="font-weight-light">{props.names}</h1>
          <p>
            {props.description}
          </p>
        </div>
  )
}

class Aboutclass extends React.Component{
  constructor(props) {
      super(props)
      this.state ={
          arrayofnames: []
      }
  
  }
  componentDidMount() {
      fetch('http://localhost:3001/about',{headers:{'Content-Type':'application/json', 'Accept': 'application/json'}})
           .then(res => res.json())
           .then(data => this.setState({arrayofnames: data}));
  }

  render(){
    let mappedNames = this.state.arrayofnames.map(item => 
    <Names names={item.names} description = {item.description} />)
    console.log(mappedNames)
    return(
    <div className="about">
    <p>  </p>
    <h1 class="font-weight-light" align = "center" >All About Us!</h1>
    <div class="container">
      <div class="row align-items-center my-5">
        {mappedNames}
      </div>
    </div>
  </div>
  )
  }
}

export default Aboutclass;



