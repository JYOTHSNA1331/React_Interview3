import {Component} from 'react'
import Child from './Child'
 
class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            Name : 'John'
        }
        this.setName=this.setName.bind(this)
    }
    setName = (e) =>{
       this.setState({Name:e.target.value})
    }
    render(){
        return(
            <div>
                <h4>Parent Component</h4>
                Input : <input value={this.state.Name} onChange={this.setName} />
                <Child eleValue={this.state.Name} />
            </div>
        )
    }
}

export default Parent