import React, { Component } from 'react'


export default class Form extends Component{
    constructor(props){
    super(props)
        this.setState = {
            form: props
        }

    }
   
render(){
    return (
        
        <div className='container'>
        <form>
        <textarea comments=
        {this.props.comments}
        category={this.props.category}>
        

        </textarea>
        </form>
         </div> 
    )
}
}


