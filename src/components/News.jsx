import React from "react";

function News(props){
  return(
    <div>
          <a href = {props.url}>< h1 className="font-weight-light">{props.title}  </h1></a>
          <br></br>
          
        </div>
  )
}

class Newsclass extends React.Component{
  constructor(props) {
      super(props)
      this.state ={
          arrayofnews: []
      }
  
  }
  componentDidMount() {
      fetch('http://localhost:4015/news',{headers:{'Content-Type':'application/json', 'Accept': 'application/json'}})
           .then(res => res.json())
           .then(data => this.setState({arrayofnews: data.articles}));
  }

  render(){
    let mappedNews = this.state.arrayofnews.map(item => 
    <News title={item.title} url = {item.url} />)
    console.log(mappedNews)
    return(
    <div className="news">
    <br></br>
    <h1 class="font-weight-light" align = "center" >Top News Headlines for Today!</h1>
    <div class="container">
      <div class="row align-items-center my-5">
        {mappedNews}
      </div>
    </div>
  </div>
  )
  }
}

export default Newsclass;