import React, {Component} from 'react'

class Inputs extends Component{
    constructor(props){
        super(props)
        this.state = {
            comments: '',
            value: '',
        }
        this.handlesClick = this.handlesClick.bind(this)
        this.updateChange = this.updateChange.bind(this)
    }

    updateChange(value){
        this.setState({ comments: value })
    }

    handlesClick(value){
        this.setState({value: value})
    }

    render(){
       return(
            <div className='inputs'>
                Comment:
               <input onChange={(e) => this.updateChange(e.target.value) }/>
               <button onClick={() => this.handlesClick() }>save</button>
               
             </div>
        )
    }
}

export default Inputs

