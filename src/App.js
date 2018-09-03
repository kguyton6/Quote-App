import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Form from './components/Form'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     quote: [],
     


    }
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

   

 
  render() {
   
      return (
      <div className="App">
      <Header />
 
    <h3> {this.state.quote}</h3>
      <main>
        <div>
        { <Form />}
        </div>
     
      </main>
      
    
     

     

      

      </div>
   
    );
    
  }
}

  
export default App;
