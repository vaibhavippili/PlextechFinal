import React from "react";

function Contacts(props){
  return(
    <div class="col">
          <h1> <b>{props.contacts}</b></h1>
          <h1 class="font-weight-light">{props.email}</h1>

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
      fetch('http://localhost:4013/contact',{headers:{'Content-Type':'application/json', 'Accept': 'application/json'}})
           .then(res => res.json())
           .then(data => this.setState({arrayofcontacts: data}));
  }
  render(){
    let mappedContacts = this.state.arrayofcontacts.map(item => 
    <Contacts contacts={item.contacts} email = {item.email} />)

   return(
    <React.Fragment>
    <div className="contact" >
        <h1 class="font-weight-light" align = "center" color= 'blue'><b>Feel free to contact us!</b></h1>
        <div class="container" >
<div >
                <l1>{mappedContacts[0]}</l1>
            </div>
<a href="http://www.instagram.com/vaiibhav_i" target="_"><input 
type="button" background-color="powderblue" value="Vaibhav's Insta"/></a>

<l1>{mappedContacts[1]}</l1> 

<a href="http://www.instagram.com/anoushhka.s" target="_"><input 
type="button" value="Anoushka's Insta"/></a>


        </div>
    </div>
    </React.Fragment>

    )

  }
}



export default Contactclass;
