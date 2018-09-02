import React, { Component } from 'react'


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
            

    render(){
        
       return (        
        <div className='container'>
         <form>
           <input  
            onChange={ e => this.setState(({ firstname: e.target.value }))} placeholder='first name'/>
           <input 
             onChange={ e => this.setState(({ lastname: e.target.value }))} placeholder='last name'/>
           <textarea type='text' className="textarea" placeholder='my thoughts...' 
             onChange={ e => console.log((this.setState({ textArea: e.target.value })))}>
            </textarea>
            <button onClick={() => this.handleClick(console.log(this.state))}>
            save
           
         </button>
      </form>
     </div> 
    )
  }
  
}

export default Form
