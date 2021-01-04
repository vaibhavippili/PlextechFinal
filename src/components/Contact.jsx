import React from "react";

function Contacts(props){
  return(
    <div class="col">
          <h1 class="font-weight-light">{props.contacts}</h1>
          <p>
            {props.email}
          </p>
        </div>
  )
}

class Contactclass extends React.Component{
  constructor(props) {
      super(props)
      this.state ={
          arrayofcontacts: []
      }
  
  }
  componentDidMount() {
      fetch('http://localhost:3001/contact',{headers:{'Content-Type':'application/json', 'Accept': 'application/json'}})
           .then(res => res.json())
           .then(data => this.setState({arrayofcontacts: data}));
  }

  render(){
    let mappedContacts = this.state.arrayofcontacts.map(item => 
    <Contacts contacts={item.contacts} email = {item.email} />)
    console.log(mappedContacts)
    return(
    <div className="contact">
    <p>  </p>
    <h1 class="font-weight-light" align = "center" >Feel free to contact us!</h1>
    <div class="container">
      <div class="row align-items-center my-5">
        {mappedContacts}
      </div>
    </div>
  </div>
  )
  }
}

export default Contactclass;