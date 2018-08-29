import React, {Component} from 'react'



class Profile extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            user_id: 0

        }

    }
    
    render(){
        console.log('profile props', this.props.match)
        return(
            <div>
                
                {this.state.user_id}
             </div>
        )
    }
}

export default Profile