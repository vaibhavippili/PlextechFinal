import React, { Component } from 'react'
import axios from 'axios';

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos : [],
             item : ""
        }
    }

    changeHandler = (event) => {
        this.setState({item: event.target.value})
    }

    clickHandler = (event) => {
        event.preventDefault()
        console.log(this.state.item)
        axios({
            method: 'post',
            url: 'http://localhost:4007/',
            data: {
              todo: this.state.item,
            }
          });
        this.setState({item:''})
    }

    componentDidMount() {
        axios.get('http://localhost:4007/').then((response) => {
            console.log(response.data.data)
            let data = [];
            console.log(response.data.data.length)
            for(var i =0; i < response.data.data.length; i++){
                data.push(response.data.data[i].todo)
            }
            this.setState({todos: data})
        });
    }
    componentDidUpdate() {
        axios.get('http://localhost:4007/').then((response) => {
            console.log(response.data.data)
            let data = [];
            console.log(response.data.data.length)
            for(var i =0; i < response.data.data.length; i++){
                data.push(response.data.data[i].todo)
            }
            this.setState({todos: data})
        });
    }
  
    render() {
        
        return (
            <div>
                <div>
                    <br></br>
                <h1 class="font-weight-light" align = "center" >What's Next?</h1>
                <input align = "center" type="text" onChange={this.changeHandler}/>
                <button align = "center" type="submit" onClick={this.clickHandler}>add</button>
                <ul>{this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)}</ul>
                </div>
            </div>
        )
    }
}

export default Todo