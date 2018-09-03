import React, { Component } from 'react'
import DashBoard from './DashBoard'
import axios from 'axios'

class Form extends Component{
    constructor(props){
    super(props)
        this.state = {
              
                firstname: ' ',
                  lastname: ' ',
                  textArea: ' ',
        
                }
            
        
        this.handleClick = this.handleClick.bind(this)

    }
    
        
    handleClick(){
          }
    // handlePublish(){
    //     axios.post('/api/dailyquotes/comments', )
    // }    

    render(){
        
    
       return (        
        <div className='container'>
         <form>
           <input  
            onChange={ e => this.setState(({ firstname: e.target.value }))} placeholder='first name'/>
           <input 
             onChange={ e => this.setState(({ lastname: e.target.value }))} placeholder='last name'/>
           <textarea type='text' className="textarea" placeholder='my thoughts...' 
             onChange={ e => ((this.setState({ textArea: e.target.value })))}>
            </textarea>
            <DashBoard forDashboard={ this.state } /> 
            <button onClick={() => this.handleClick(console.log(this.state))}>
            Save
            </button>
           
           
      </form>
     </div> 
    )
  }
  
}

export default Form
