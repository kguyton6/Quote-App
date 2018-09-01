import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Inputs from './components/Inputs'
import Form from './components/Form'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     quote: [],
     comments: [],
     id: 0,
     category: true
    }
    this.updateChange = this.updateChange.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handlesClick = this.handlesClick.bind(this)
  }

 componentDidMount() {
    axios.get(`http://quotes.rest/qod/`)
      .then((res) => {
        this.setState({ 
        quote: res.data.contents.quotes[0].quote})
          console.log(res.data)
      })
  
      
      .catch((err) => {
        console.log(`err `, err);
      })
   }  

   updateChange(val){
    this.setState({ comments : val })
  }
  
 
  handlesClick(val){
    axios.post('api/dailyquotes/comments')
   this.setState({comments: val}) 
  }
  



 
  render() {
   
      return (
      <div className="App">
      <Header />
 
    <h3> {this.state.quote}</h3>
      <main>
        <Inputs updateChange={this.updateChange} handlesClick={this.handlesClick}/>
      <Form savedName={this.state.savedName}/>
      </main>
      
    
     

     

      

      </div>
   
    );
    
  }
}

  
export default App;
