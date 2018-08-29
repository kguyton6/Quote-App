import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import './server/server'
import Header from './components/Header'
import Footer from './components/Footer'
// import './routes'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     quotes: [],
     favorites: [],
     id: 0
    }
    this.updateFavorites = this.updateFavorites.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getFavorites = this.getFavorites.bind(this)
  }

 componentDidMount() {
    axios.get(`http://quotes.rest/qod/categories`)
      .then((res) => {
        this.setState({ quotes: res.data.contents.quotes[0]})
        // console.log(this.state.quotes)
        
      })
      .catch((err) => {
        console.log(`err `, err);
      })
      
    }  
  
  handleSave(){
    axios.post('/api/dailyquotes/', this.state.quotes).then((res) => {console.log(res.data)})
   
  }

  getFavorites(){
    axios.get(`/api/dailyquotes/`).then((res) => {
      this.setState({
        favorites: res.data
      })
    })
    console.log(this.state.favorites)
  }
 
  
  // updateFavorites(id){
  //   axios.put(`/api/dailyquotes/favorites${id}`).then((res) => {
  //     this.setState({ favorites: res.data.favorites.id})
  //   })
    
  
  // }

  // deleteFavorite(id){
  //   axios.delete(this.state.favorites).filter((quote, id) => {
      
  //   })
  // }
  
  render() {
   
      return (
      <div className="App">
      <Header />

     
      <p> {this.state.quotes.quote} </p>
    
      {/* <p>{this.state.favorites}</p> */}
      {/* <input type='checkbox'/> Add to Favorites */}
      {/* <button onClick={() => this.handleSave()}> Save</button> */}
      {/* <button onClick={() => this.getFavorites()}>favorites</button> */}
     
      
     
{/* <input type='checkbox'/> Delete from Favorites */}
      
      <Footer />
      </div>
   
    );
    
  }
}

  
export default App;
