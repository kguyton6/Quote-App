import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Form from './components/Form'
// import './routes'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     quote: [],
     savedFavorites: [],
     id: 0
    }
    // this.postFavorites = this.postFavorites.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    // this.handleSave = this.handleSave.bind(this)
  }

 componentDidMount() {
    axios.get(`http://quotes.rest/qod/`)
      .then((res) => {
        this.setState({ 
        quote: res.data.contents.quotes[0]})

      })
  
      
      .catch((err) => {
        console.log(`err `, err);
      })
   }  

  handlesTheQuotes(quote){
  axios.post(`/api/dailyquotes/`, quote).then((res) => {
    res = dailyQuote
   
  })
}

handleFavorite(req, res){
    axios.put('/api/')
  }
 
  render() {
   
      return (
      <div className="App">
      <Header />
 
     
      
    
      
      <button onClick={() => this.handleSave()}> Save</button>
      <button onClick={() => this.getFavorites()}>favorites</button>
     
      <Form /> */}
     

      

      </div>
   
    );
    
  }
}

  
export default App;
