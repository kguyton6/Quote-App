import React, { Component } from 'react'


class Form extends Component{
    constructor(props){
    super(props)
        this.state = {
            firstname: '',
            lastname: '',
            textArea: '',
           
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
        
    handleClick(){
        this.setState({
            firstname: ' ',
            lastname: ' ',
            textArea: ' '
        })
    }
            

    render(){
       return (        
        <div className='container'>
         <form>
           <input  
            onChange={ e => this.setState(({ firstname: e.target.value }))} placeholder='first name'/>
           <input 
             onChange={ e => this.setState(({ lastname: e.target.value }))} placeholder='last name'/>
           <textarea className="textarea" placeholder='my thoughts...' 
             onChange={ e => (this.setState({ text: e.target.value }))}>
          </textarea>     
            <button onClick={console.log(this.handleClick)}>
            save
         </button>
      </form>
     </div> 
    )
  }
}

export default Form
