import React from "react";

function Names(props){
  return(
    <div class="col">
          <h1 >{props.names}</h1>
          <h2 class="font-weight-light">{props.description}</h2>
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
      fetch('http://localhost:4013/about',{headers:{'Content-Type':'application/json', 'Accept': 'application/json'}})
           .then(res => res.json())
           .then(data => this.setState({arrayofnames: data}));
  }

  render(){
    let mappedNames = this.state.arrayofnames.map(item => 
    <Names names={item.names} description = {item.description} />)
    console.log(mappedNames)
    return(
    <div className="about" >
    <p>  </p>
    <h1 class="font-weight-light" align = "center" ><b>All About Us!</b></h1>
    <div class="container">
      <div class="row align-items-center my-5">
        {mappedNames}
      </div>
      <img
              class="img-fluid rounded"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHMatgWHZyL8Q/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=SIUqiDtsYmHzUaLRJyIctYNMVMTB1kR4LaGqgQRL9oI"
              alt=""
              style = {{paddingRight: 370}}
            />
      <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://media-exp1.licdn.com/dms/image/C5603AQHOjQGE381WkA/profile-displayphoto-shrink_200_200/0/1596395988223?e=1613001600&v=beta&t=n7uvWI1W3FYCPT3UvIu4V6PrELTBqukr5hkr0rltQck"
              alt=""
            />
    </div>

  </div>
  )
  }
}

export default Aboutclass;







